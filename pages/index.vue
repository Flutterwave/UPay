<template>

  <ion-tabs>
    <ion-tab tab="payments">
      <payment-list></payment-list>
    </ion-tab>

  <ion-tab tab="fund">
    <fund-wallet></fund-wallet>
  </ion-tab>



  <ion-tab tab="history">
<history></history>
  </ion-tab>

  <ion-tab-bar slot="bottom">





    <ion-tab-button tab="fund">
      <ion-label>Fund Wallet</ion-label>
      <ion-icon name="wallet-outline"></ion-icon>    </ion-tab-button>


    <ion-tab-button tab="payments"   >
      <ion-label>Purchase VAS</ion-label>
      <ion-icon name="grid-outline"></ion-icon>    </ion-tab-button>

    <ion-tab-button tab="history">
      <ion-label>History</ion-label>
      <ion-icon name="bar-chart-outline"></ion-icon>    </ion-tab-button>

  </ion-tab-bar>
  </ion-tabs>


</template>

<script>
import Vue from 'vue'
import FundWallet from "~/components/fund-wallet.vue";
import PaymentList from "~/components/payment-list.vue";
import History from "~/components/history.vue";



export default {
    components: {History, PaymentList, FundWallet},
   async  mounted() {


      let userDetails = this.$UserHelper.getUserDetails()
      if (!userDetails.token){
          this.$Utils.navigateTo('/login')
      }
      else{
          try{

           let res =   await this.$axios.$get('balance')
              console.log("INIT USER WALLET", res)
              this.$store.commit('wallet/update',res.data.wallet_amount )
          }
          catch (e) {
              console.log("Token expired");
              this.$Utils.navigateTo('/login')
          }

      }

    } ,


}
</script>
