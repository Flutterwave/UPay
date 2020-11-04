<template>

  <div >

    <ion-tabs >
      <ion-tab tab="payments" >
        <payment-list></payment-list>
      </ion-tab>

      <ion-tab tab="fund">
        <fund-wallet></fund-wallet>
      </ion-tab>


      <ion-tab tab="history">
        <history></history>
      </ion-tab>


   <ion-tab-bar slot="bottom" id="tab-bar">


  <ion-tab-button tab="fund" >
          <ion-label>Fund Wallet</ion-label>
          <ion-icon name="wallet-outline"></ion-icon>    </ion-tab-button>


        <ion-tab-button tab="payments">
          <ion-label>Home</ion-label>
          <ion-icon name="grid-outline"></ion-icon>    </ion-tab-button>

        <ion-tab-button tab="history">
          <ion-label>History</ion-label>
          <ion-icon name="bar-chart-outline"></ion-icon>    </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>

  </div>




</template>


<script>
import Vue from 'vue'
import FundWallet from "~/components/fund-wallet.vue";
import PaymentList from "~/components/payment-list.vue";
import History from "~/components/history.vue";



export default {
    components: {History, PaymentList, FundWallet},
    data(){
        return {
            //showApp: this.$store.state.app.showApp
        }
    },
   async  mounted() {

     let userDetails = this.$UserHelper.getUserDetails()
       if (!userDetails.token){
             this.$Utils.navigateTo('/login')
       }
       else{
           try{

               this.$store.commit('app/setWalletFetchStatus',true )

               let res =   await this.$axios.$get('balance')
               console.log("INIT USER WALLET", res)
               this.$store.commit('wallet/update',res.data.wallet_amount )
               this.$store.commit('app/setWalletFetchStatus',false )
           }
           catch (e) {
               console.log("Token expired");
               this.$store.commit('app/setWalletFetchStatus',false )
                this.$Utils.navigateTo('/login')
           }

       }






   } ,
    methods:{
    }


}
</script>

<style scoped>

  @media only screen and (min-width: 760px) {
    #tab-bar { display: none; }
  }




  .header_content{
    margin: 6vh auto;
    text-align: center;

  }

  .logoContainer{
    margin: 2vh 8vh;
    display: flex;
    align-items: center;
  }

  .section2{
    margin-top: 8vh;
  }
.userImage1{
  float: right;
  padding-right: 7vw;
  width: 40vw;
}

  .section2Container{
    display: flex;
    flex-direction: row;
  /* align-items: center;
   justify-content: center;*/

  }
  .item-container{
    flex: 1
  }
  .section2Content{
    padding-top: 3vh;
    max-width: 50%;
/*
    text-align: center;
*/
  }
.checkIcon{
color: #f5a623 !important;
}
  ion-icon{
    color: #f5a623 !important;
/*
    --ionicon-stroke-color: #f5a623 !important;
*/
/*
    background: #f5a623;
*/

  }
.featureList{
display: flex;
  align-items: center;
/*
  justify-content: center;
*/


}
  ion-icon div svg polyline {
    color: #f5a623 !important;

  }

  .section3{
    margin-top: 6vh;
    text-align: center;


  }

  .serviceList{
    display: flex;
    width: 70%;
    margin: 0 auto;

  }
  .serviceCard{
    padding-top: 2vh;
    padding-bottom: 2vh;
    box-shadow: 0px 0px 15px rgba(33, 43, 54, 0.2);
  }

</style>
