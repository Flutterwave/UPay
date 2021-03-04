<template>
  <div>
    <ion-header translucent>
      <ion-toolbar>
        <back-button></back-button>

        <ion-title>Buy Power</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" fullscreen>
      <ion-card class="card_padding">
        <ion-item>
          <ion-label position="floating">Provider</ion-label>
          <ion-select
            :value="paymentData.provider"
            @ionChange="paymentData.provider = $event.target.value"
          >
            <ion-select-option
              :key="item.item_code"
              :value="item.item_code"
              v-for="item in providers"
              >{{ item.name }}
            </ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Amount</ion-label>
          <ion-input
            :value="paymentData.amount"
            @ionInput="paymentData.amount = $event.target.value"
          ></ion-input>
        </ion-item>

        <ion-item>
          <ion-grid class="no-padding">
            <ion-row>
              <ion-col size="10">
                <ion-label position="floating">Meter ID</ion-label>

                <ion-input
                  :value="paymentData.deviceId"
                  @change="validateDeviceId"
                  @ionInput="paymentData.deviceId = $event.target.value"
                  debounce="0"
                >
                </ion-input>
              </ion-col>
              <ion-col>
                <ion-spinner
                  name="lines-small"
                  style="position: absolute; bottom: 0px"
                  v-if="showSpinner"
                ></ion-spinner>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-card v-if="customerDetails.name">
          <ion-card-content>
            <h3>Customer Details</h3>
            <p>{{ customerDetails.name }}</p>
          </ion-card-content>
        </ion-card>

        <ion-button
          :disabled="!canSubmit"
          @click="makePayment"
          class="centralise margin_top"
          expand="block"
          >PURCHASE
        </ion-button>
      </ion-card>
    </ion-content>
  </div>
</template>

<script>
export default {
  name: "BuyPower",
  data() {
    return {
      paymentData: {
        provider: "",
        billerCode: "",
        providerName: "",
        dataPackageId: "",
        deviceId: "",
        amount: "",
        type: "IKEDC Prepaid topup",
      },
      isSubmitting: false,
      showSpinner: false,
      providers: [
        {
          name: "Ikeja Disco Pre Paid",
          code: "BIL113",
          item_code: "UB159",
        },
        {
          name: "Ikeja Disco Post Paid",
          code: "BIL113",
          item_code: "UB160",
        },
        {
          name: "Ibadan Disco Prepaid",
          code: "BIL114",
          item_code: "UB161",
        },
        {
          name: "Ibadan Disco Prepaid",
          code: "BIL114",
          item_code: "UB162",
        },
        {
          name: "Enugu Disco Pre Paid",
          code: "BIL115",
          item_code: "UB163",
        },
        {
          name: "Enugu Disco Post Paid",
          code: "BIL115",
          item_code: "UB164",
        },
      ],
      selectedItemDetails: {},
      customerDetails: {},
    };
  },
  computed: {
    allPackage() {
      return this.$store.state.app.bills;
    },
    canSubmit() {
      return (
        this.paymentData.provider &&
        this.paymentData.type &&
        this.customerDetails.name
      );
    },
  },
  watch: {
    "paymentData.provider": function (val) {
      let discoItem = this.allPackage.filter((item) => {
        return item.item_code == val;
      });

      this.selectedItemDetails = discoItem[0];
      console.log("Selected Power Item", this.selectedItemDetails);
    },
  },
  methods: {
    async validateDeviceId() {
      this.customerDetails = {};
      try {
        this.showSpinner = true;
        const api = this.$axios.create({
          headers: {
            common: {
              Accept: "text/plain, */*",
            },
            "X-Requested-With": "browser",
            Authorization: `Bearer`,
          },
        });

        let device = await api.$get(
          `https://cors-anywhere.herokuapp.com/https://api.flutterwave.com/v3/bill-items/${this.selectedItemDetails.item_code}/validate?code=${this.selectedItemDetails.biller_code}&customer=${this.paymentData.deviceId}`
        );

        this.customerDetails = device.data;
        this.showSpinner = false;
      } catch (e) {
        this.showSpinner = false;
        this.$Utils.presentToast("Invalid Device ID. Please try again");
      }
    },
    generateReference() {
      let date = new Date();
      return date.getTime().toString();
    },

    async makePayment() {
      let paymentParams = {
        country: "NG",
        customer: this.paymentData.deviceId,
        amount: this.paymentData.amount,
        recurrence: "ONCE",
        type: this.selectedItemDetails.biller_name,
        biller_name: this.selectedItemDetails.biller_name,
        reference: this.generateReference(),
        package_data: "POWER",
      };

      try {
        this.$Utils.showSpinner("Processing...");
        let paymentResponse = await this.$axios.$post("/bills", paymentParams);

        this.$Utils.dismissSpinner();
        this.$Utils.presentToast("Cable Subscription is Successful");
      } catch (e) {
        this.$Utils.dismissSpinner();
        this.$Utils.presentToast("Cable Subscription failed");
      }
    },
  },
};
</script>

<style scoped></style>
