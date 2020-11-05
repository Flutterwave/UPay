<template>
  <div>

    <ion-header translucent>

      <ion-toolbar>


        <back-button></back-button>


        <ion-title>Buy Airtime</ion-title>


      </ion-toolbar>
    </ion-header>


    <ion-content class="ion-padding" fullscreen>


      <ion-card class="card_padding">

        <ion-item>

          <ion-label position="floating">Network</ion-label>
          <ion-select :value="paymentData.network" @ionChange="paymentData.network = $event.target.value">
            <ion-select-option>MTN</ion-select-option>
            <ion-select-option>Airtel</ion-select-option>
            <ion-select-option>Etisalat</ion-select-option>
            <ion-select-option>GLO</ion-select-option>

          </ion-select>
        </ion-item>

        <ion-item>


          <ion-label position="floating">Mobile Number</ion-label>

          <ion-input :value="paymentData.mobileNumber"
                     @ionInput="paymentData.mobileNumber = $event.target.value"
                     debounce="0" type="tel"
          ></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Amount</ion-label>

          <ion-input :value="paymentData.amount" @ionInput="paymentData.amount = $event.target.value"
                     debounce="0"
                     type="number"></ion-input>

        </ion-item>


        <ion-button :disabled="!paymentData.network || !paymentData.mobileNumber || !paymentData.amount"
                    @click="makePayment"
                    class="centralise margin_top" expand="block">PURCHASE
        </ion-button>


      </ion-card>

    </ion-content>


  </div>
</template>

<script>

    import BackButton from "./back-button";

    export default {
        name: "buy-airtime",
        components: {BackButton},
        data() {
            return {
                paymentData: {
                    network: '',
                    mobileNumber: '',
                    amount: ''
                },
                isSubmitting: false
            }
        },
        methods: {
            generateReference() {
                let date = new Date();
                return date.getTime().toString();
            },

            async makePayment() {

                let paymentParams = {
                    "country": "NG",
                    "customer": this.paymentData.mobileNumber,
                    "amount": this.paymentData.amount,
                    "recurrence": "ONCE",
                    "type": "AIRTIME",
                    "reference": this.generateReference(),
                    "biller_name": this.paymentData.network,
                    "package_data": "Airtime"
                };

                console.log(paymentParams);
                this.$Utils.showSpinner("Processing...");

                let paymentResponse = await this.$axios.$post('/bills', paymentParams);
                console.log(paymentResponse);
                if (paymentResponse.status == '201') {
                    this.$Utils.dismissSpinner();

                    // alert("Payment successful")
                    this.$Utils.presentToast("Airtime Purchase is successful")
                }
            },

        },

    }
</script>

<style scoped>

</style>
