<template>

  <div>
    <ion-tabs v-if="showApp">
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


    <div v-if="!showApp">





      <ion-content fullscreen class="">

        <div class="section1">

          <div class="logoContainer">

            <img class="logoImg" src="../static/images/logo.png">&nbsp;
            <p>OSS</p>
          </div>

          <div class="header_content">
            <h1>Sort all your Bills from</h1>
            <h1>the comfort of your zone</h1>
            <p>Automated payments to make sure you</p>
            <p>always have you need </p>

            <div>
              <ion-button expand="block" @click="showApp = true">Get Started</ion-button>
            </div>
          </div>


        </div>


        <div class="section2">

          <div class="section2Container">


              <div class="item-container ion-hide-sm-down">
                <img class="userImage1" src="../static/images/user1.png">
              </div>

              <div  class="item-container">

                <div class="section2Content ion-padding-horizontal">
                  <h1>
                    Pay your Bills
                    <br/>anywhere, anytime.
                  </h1>

                  <p>Lorem ipsum snbd kdjjbd djkjcd djckckjbjcs <br>cjcsd ajbjidbd sdjjdsndjsb dsajbasbidjas<br> dsaiaduasbd sajbjsab</p>

             <!--     <ul class="no-padding">
                    <li> Recharge airtime for your calls </li>
                    <li> Pay for your internet subscription and data across any ISP </li>
                    <li> Automate your TV Subscription </li>

                    <li> Pay for your Electricity bills </li>


                  </ul>-->

                  <div class="featureList">
                    <ion-icon name="checkmark-circle-outline" size="large"  ></ion-icon>
                    <p>
                      Recharge One time leet yskhbd  dh
                    </p>
                  </div>


                  <div class="featureList">
                    <ion-icon name="checkmark-circle-outline" size="large"  ></ion-icon>
                    <p>
                      Recharge One time leet yskhbd  dh
                    </p>
                  </div>


                  <div class="featureList">
                    <ion-icon name="checkmark-circle-outline" size="large"  ></ion-icon>
                    <p>
                      Recharge One time leet yskhbd  dh
                    </p>
                  </div>

                  <div class="featureList">
                    <ion-icon name="checkmark-circle-outline" size="large"  ></ion-icon>
                    <p>
                      Recharge One time leet yskhbd  dh
                    </p>
                  </div>





                </div>


              </div>


          </div>

        </div>

        <div class="section3">

          <h1>Supported Bill and Subscription Payments</h1>

          <div class="serviceList">



            <ion-grid>
              <ion-row>
                <ion-col v-for="item in 5">
                  <ion-card class="serviceCard">
                    <img src="../static/images/dstvLogo.png">
                  </ion-card>
                </ion-col>
              </ion-row>


              <ion-row>
                <ion-col v-for="item in 5">
                  <ion-card class="serviceCard">
                    <img src="../static/images/dstvLogo.png">
                  </ion-card>
                </ion-col>
              </ion-row>


            </ion-grid>
          </div>



        </div>


      </ion-content>

    </div>

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
            showApp: false
        }
    },
   async  mounted() {


      let userDetails = this.$UserHelper.getUserDetails()
      if (!userDetails.token){
       //   this.$Utils.navigateTo('/login')
      }
      else{
          try{

           let res =   await this.$axios.$get('balance')
              console.log("INIT USER WALLET", res)
              this.$store.commit('wallet/update',res.data.wallet_amount )
          }
          catch (e) {
              console.log("Token expired");
             // this.$Utils.navigateTo('/login')
          }

      }

    }


}
</script>

<style scoped>

  .section1{
    color: white;
    width: 100vw;
    height: 75vh;
    background-image: url("../static/images/bg1.png");
    display: flex;
    flex-direction: column;
/*
    //border-image-repeat: stretch;
*/
    background-repeat: no-repeat;
/*
    background-size: 100vw;
*/

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
/*
    max-width: 50%;
*/
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
