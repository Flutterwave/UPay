<template>
  <div>
    <ion-header translucent>
      <ion-toolbar>
        <back-button></back-button>

        <ion-title>Buy Cable Subscription</ion-title>
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
              :key="item.code"
              :value="item.code"
              v-for="item in providers"
              >{{ item.name }}
            </ion-select-option>
          </ion-select>
        </ion-item>

        <ion-grid>
          <ion-row>
            <ion-col size="7">
              <ion-item>
                <ion-label position="floating">Package</ion-label>
                <ion-select
                  :value="paymentData.type"
                  @ionChange="paymentData.type = $event.target.value"
                >
                  <ion-select-option
                    :key="item.id"
                    :value="item.biller_name"
                    v-for="item in selectedProviderPackage"
                    >{{ item.biller_name }}
                  </ion-select-option>
                </ion-select>
              </ion-item>
            </ion-col>

            <ion-col>
              <ion-item>
                <ion-label position="floating">Price</ion-label>
                <ion-input :value="paymentData.amount" disabled></ion-input>
              </ion-item>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-item>
          <ion-grid>
            <ion-row>
              <ion-col size="10">
                <ion-label position="floating">Device Number</ion-label>

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
  name: "BuyCable",
  data() {
    return {
      paymentData: {
        provider: "",
        billerCode: "",
        providerName: "",
        dataPackageId: "",
        deviceId: "",
        amount: "",
        type: "",
      },
      showSpinner: false,
      providers: [
        {
          name: "DSTV",
          code: "BIL121",
        },
        {
          name: "GOTV",
          code: "BIL122",
        },
        {
          name: "Startimes",
          code: "BIL123",
        },
      ],

      selectedProviderPackage: [], //packages offered  the selected provider
      selectedPackageData: {}, //the selected package
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
      let _package = this.allPackage.filter((item) => {
        return item.biller_code == val && item.country == "NG";
      });

      let selectedPackage = this.providers.filter((item) => {
        return item.code == val;
      });

      this.selectedProviderPackage = _package;
      this.paymentData.providerName = selectedPackage[0].name;
    },
    "paymentData.type": function (val) {
      console.log("Selected Package", val);
      let _package = this.allPackage.filter((item) => {
        return item.biller_name == val;
      });
      console.log(" Package", _package);
      this.paymentData.amount = _package[0].amount;
      this.selectedPackageData = _package[0];
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
            Authorization: `Bearer `,
          },
        });

        let device = await api.$get(
          `https://cors-anywhere.herokuapp.com/https://api.flutterwave.com/v3/bill-items/${this.selectedPackageData.item_code}/validate?code=${this.selectedPackageData.biller_code}&customer=${this.paymentData.deviceId}`
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
        type: this.paymentData.type,
        biller_name: this.paymentData.type,
        reference: this.generateReference(),
        package_data: "CABLE",
      };

      try {
        this.$Utils.showSpinner("Processing...");

        let paymentResponse = await this.$axios.$post("/bills", paymentParams);
        console.log(paymentResponse);

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
