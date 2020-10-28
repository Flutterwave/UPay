<template>
  <div>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Fund Wallet</ion-title>
        <profile-button></profile-button>

      </ion-toolbar>
    </ion-header>

    <ion-content fullscreen class="ion-padding">

    <user-details></user-details>

      <ion-card class="card_padding">
        <ion-item>
        <ion-label position="floating">Amount</ion-label>

        <ion-input
          debounce="0"
          :value="paymentData.amount"
          @ionInput="paymentData.amount = $event.target.value"

        >

        </ion-input>

        </ion-item>


        <ion-button  expand="block" class="centralise margin_top"  @click="makePayment" >Fund</ion-button>






      </ion-card>

    </ion-content>


  </div>
</template>

<script>

    import UserDetails from "./user-details";
    export default {
        name: 'fund-wallet',
        components: {UserDetails},
        data(){
            return {
                paymentData: {
                    tx_ref: this.generateReference(),
                    amount: '',
                    currency: 'NGN',
                    payment_options: '',
                    redirect_url: '',
                    meta: {
                        'counsumer_id': '',
                        'consumer_mac': ''
                    },
                    customer: {
                        name: '',
                        email: 'customer@mail.com',
                        phone_number: '081845***044'
                    } ,
                    customizations: {
                        title: 'UPay',
                        description: 'Upay  Wallet Funding',
                        logo: 'https://flutterwave.com/images/logo-colored.svg'
                    },
                    callback: this.updateWallet,
                    onclose: this.closedPaymentModal
                },
                isTopUpCompleted: false
            }
        } ,
        methods: {

            makePayment() {
                let user = this.$UserHelper.getUserDetails()
                this.paymentData.customer = {
                    name: user.l_name + ' ' + user.f_name ,
                    email: user.email,
                    phone_number: user.phone
                }
                this.payWithFlutterwave(this.paymentData)
            } ,
          async  updateWallet(){
              this.$Utils.showSpinner( "Processing...")

              let updateWalletResponse = await this.$axios.$post('/balance', {amount: parseInt(this.paymentData.amount) } );
                console.log(updateWalletResponse)
                if(updateWalletResponse.status == '201' ){
                    this.$Utils.dismissSpinner()


                    this.$store.commit('wallet/update',updateWalletResponse.data.wallet_amount )
                    this.paymentData.amount = ''
                    this.isTopUpCompleted = true

                }
            },
            closedPaymentModal() {
                console.log('payment is closed');
                if(this.isTopUpCompleted){
                    this.$Utils.presentToast("Wallet Top Up is Successful")
                }


            },
            generateReference(){
                let date = new Date()
                return date.getTime().toString();
            },


        }
    }
</script>
