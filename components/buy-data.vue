<template>
  <div>
    <ion-header translucent>
      <ion-toolbar>
        <back-button></back-button>

        <ion-title>Buy Data</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" fullscreen>


      <ion-card class="card_padding">

        <ion-item>

          <ion-label position="floating">Network</ion-label>
          <ion-select :value="paymentData.network" @ionChange="paymentData.network = $event.target.value">
            <ion-select-option :key="item.code" :value="item.code" v-for="item in networks">{{item.name}}
            </ion-select-option>


          </ion-select>
        </ion-item>
        <!--
        //08123007075
        -->


        <ion-grid>
          <ion-row>
            <ion-col size="8">
              <ion-item>
                <ion-label position="floating">Data Plan</ion-label>
                <ion-select :value="paymentData.type" @ionChange="paymentData.type = $event.target.value">
                  <ion-select-option :key="item.id" :value="item.biller_name"
                                     v-for="item in selectedNetworkDataPackage">{{ getDataValue(item.biller_name) }}
                  </ion-select-option>
                  <!-- <ion-select-option>AIRTEL</ion-select-option>
                   <ion-select-option>ETISALAT</ion-select-option> <ion-select-option>GLO</ion-select-option>
-->
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

          <ion-label position="floating">Mobile Number</ion-label>

          <ion-input :value="paymentData.mobileNumber"
                     @ionInput="paymentData.mobileNumber = $event.target.value"
                     debounce="0"
          ></ion-input>
        </ion-item>


        <ion-button :disabled="!paymentData.network || !paymentData.type || !paymentData.mobileNumber" @click="makePayment"
                    class="centralise margin_top" expand="block">PURCHASE
        </ion-button>


      </ion-card>

    </ion-content>


  </div>
</template>

<script>

    export default {
        name: "buy-data",
        data() {
            return {

                paymentData: {
                    network: '',
                    networkName: '',
                    billerCode: '',
                    dataPackageId: '',
                    mobileNumber: '',
                    amount: '',
                    type: '',
                },
                isSubmitting: false,
                networks: [
                    {
                        name: "MTN",
                        code: "BIL108"
                    },
                    {
                        name: "GLO",
                        code: "BIL109"
                    },
                    {
                        name: "AIRTEL",
                        code: "BIL110"
                    },
                    {
                        name: "9Mobile",
                        code: "BIL111"
                    }
                ],

                selectedNetworkDataPackage: [],
                selectedNetworkData: {}
            }
        },
        computed: {
            allNetworkDataPackage() {
                return this.$store.state.app.bills
            }
        },
        watch: {
            'paymentData.network': function (val) {
                console.log("Selected Network", val);
                let dataPackage = this.allNetworkDataPackage.filter((item) => {
                        return item.biller_code == val
                    }
                );

                let selectedNetwork = this.networks.filter(
                    (item) => {
                        return item.code == val
                    }
                );
                console.log("SELEcted Network", selectedNetwork);

                this.selectedNetworkDataPackage = dataPackage;
                this.paymentData.networkName = selectedNetwork[0].name
            },
            'paymentData.type': function (val) {
                console.log("Selected Network", val);
                let dataPackage = this.allNetworkDataPackage.filter((item) => {
                        return item.biller_name == val
                    }
                );
                console.log("DATA Package", dataPackage);
                this.paymentData.amount = dataPackage[0].amount
            },
            //   deep: true
        },
        methods: {
            generateReference() {
                let date = new Date();
                return date.getTime().toString();
            },

            getDataValue(dataString) {

                let values = dataString.split(" ");
                let dataValue = values[1] + values[2];
                return dataValue.replace('data', '')
            },

            async makePayment() {

                let paymentParams = {
                    "country": "NG",
                    "customer": this.paymentData.mobileNumber,
                    "amount": this.paymentData.amount,
                    "recurrence": "ONCE",
                    type: this.paymentData.type,
                    biller_name: this.paymentData.type,
                    "reference": this.generateReference(),
                    "package_data": "DATA",


                };

                console.log(paymentParams);
               // return;

                this.$Utils.showSpinner("Processing...");

                let paymentResponse = await this.$axios.$post('/bills', paymentParams);
                console.log(paymentResponse);
                if (paymentResponse.status == '201') {
                    this.$Utils.dismissSpinner();

                    this.$Utils.presentToast("Data Purchase is Successful")
                }
            },

        },

    }
</script>

<style scoped>

</style>
