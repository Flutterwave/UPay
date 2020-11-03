<template>

  <div>
    <div>

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
            <p>always have what you need </p>

            <div>
              <nuxt-link to="/dashboard" tag="ion-button" expand="block" >Get Started</nuxt-link>

            </div>
          </div>


        </div>


        <div class="section2">

       <!--   <div class="section2Container">


              <div class="item-container ion-hide-sm-down" >
                <img class="userImage1" src="../static/images/user1.png">
              </div>

              <div  class="item-container">

                <div class="section2Content ion-padding-horizontal">
                  <h1>
                    Pay your Bills
                    <br/>anywhere, anytime.
                  </h1>

                  <p>Lorem ipsum snbd kdjjbd djkjcd djckckjbjcs <br>cjcsd ajbjidbd sdjjdsndjsb dsajbasbidjas<br> dsaiaduasbd sajbjsab</p>



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


          </div>-->



          <ion-grid>

            <ion-row>

              <ion-col size="7"  class="ion-hide-sm-down">
                <img  class="userImage1" src="../static/images/user1.png">
              </ion-col>

              <ion-col>
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
              </ion-col>


            </ion-row>



          </ion-grid>





        </div>

        <div class="section3">

          <h1>Supported Bill and Subscription Payments</h1>

          <div class="serviceList">



            <ion-grid>
              <ion-row>
                <ion-col v-for="item in 5" >
                  <ion-card class="serviceCard">
                    <img src="../static/images/dstvLogo.png">
                  </ion-card>
                </ion-col>
              </ion-row>

              <ion-row>
                <ion-col v-for="item in 5" >
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
    layout: 'noSideBar',
    data(){
        return {
            //showApp: this.$store.state.app.showApp
        }
    },
    computed: {
        showApp(){
            return this.$store.state.app.showApp
        }
    },

   async  mounted() {



       const api =  this.$axios.create({
           headers: {
               common: {
                   Accept: 'text/plain, */*',
               } ,
               'X-Requested-With': "browser",
               'Authorization': 'Bearer FLWSECK-f451fa608690375ef578265d387bcc07-X'
           }
       })
       let billCategories =   await api.$get("https://cors-anywhere.herokuapp.com/https://api.flutterwave.com/v3/bill-categories")
       this.$store.commit('app/setBillsData', billCategories.data )

       console.log("BILLS", billCategories)

       let userDetails = this.$UserHelper.getUserDetails()
       if (!userDetails.token){
           //   this.$Utils.navigateTo('/login')
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
               // this.$Utils.navigateTo('/login')
           }

       }






   } ,
    methods:{
        makeAppVisible(){
            this.$store.commit('app/showApp', true )
        }
    }


}
</script>

<style scoped>





    .section1 {
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

      background-size: cover;


    }


    .header_content {
      margin: 6vh auto;
      text-align: center;

    }

    .logoContainer {
      margin: 2vh 8vh;
      display: flex;
      align-items: center;
    }

    .section2 {
      margin-top: 8vh;
    }

    .userImage1 {
      float: right;
      padding-right: 7vw;
      width: 40vw;
    }

    .section2Container {
      display: flex;
      flex-direction: row;
      /* align-items: center;
   justify-content: center;*/

    }

    .item-container {
      flex: 1
    }

    .section2Content {
      padding-top: 3vh;
      max-width: 50%;
      /*
    text-align: center;
*/
    }

    .checkIcon {
      color: #f5a623 !important;
    }

    ion-icon {
      color: #f5a623 !important;
      /*
    --ionicon-stroke-color: #f5a623 !important;
*/
      /*
    background: #f5a623;
*/

    }

    .featureList {
      display: flex;
      align-items: center;
      /*
  justify-content: center;
*/


    }

    ion-icon div svg polyline {
      color: #f5a623 !important;

    }

    .section3 {
      margin-top: 6vh;
      text-align: center;


    }

    .serviceList {
      display: flex;
      width: 70%;
      margin: 0 auto;

    }

    .serviceCard {
      padding-top: 2vh;
      padding-bottom: 2vh;
      box-shadow: 0px 0px 15px rgba(33, 43, 54, 0.2);
    }

    ion-thumbnail {
      width: 100%;
      border: solid #7F828B;
      height: 50%;

    }



  @media only screen and (max-width: 760px) {
    .section1{
      color: white;
      width: 100vw;
      height: 75vh;
      background-image: url("../static/images/user1.png");
      display: flex;
      flex-direction: column;
      background-repeat: no-repeat;

      background-size: cover;


    }
    .section2{
      margin-top: 1px;
    }

    .section2Content{

      max-width: 100%;
      padding-top: 1px;
      text-align: center;

    }
    .logoContainer{
      display: none;
    }
    .header_content{
      margin: 65% auto;
    }

    .section3{
      margin: 1px auto;
    }
    .section3 > h1{
      width: 80%;
      margin: 1px auto;
    }

    .serviceCard{
      margin: 0;
    }




  }






</style>
