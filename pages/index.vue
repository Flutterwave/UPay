<template>

  <div>
    <div>

      <ion-content class="" fullscreen>

        <div class="section1">

          <div class="logoContainer">
            <img class="logoImg" src="../static/images/logo.png">&nbsp;
            <p>UPay</p>
          </div>

          <div class="header_content">
            <h1>Sort all your Bills from</h1>
            <h1>the comfort of your zone</h1>
            <p>Automated payments to make sure you</p>
            <p>always have what you need </p>

            <div>
              <nuxt-link expand="block" tag="ion-button" to="/login">Get Started</nuxt-link>

            </div>
          </div>


        </div>


        <div class="section2">
          <ion-grid>

            <ion-row>

              <ion-col class="ion-hide-sm-down" size="7">
                <img class="userImage1" src="../static/images/user1.png">
              </ion-col>

              <ion-col>
                <div class="section2Content ion-padding-horizontal">
                  <h1>
                    Pay your Bills
                    <br/>anywhere, anytime.
                  </h1>

                  <p>Lorem ipsum snbd kdjjbd djkjcd djckckjbjcs <br>cjcsd ajbjidbd sdjjdsndjsb dsajbasbidjas<br>
                    dsaiaduasbd sajbjsab</p>


                  <div class="featureList">
                    <img class="checked_icon" src="../static/icons/checked.png">
                    <p>
                      Recharge One time leet yskhbd dh
                    </p>
                  </div>


                  <div class="featureList">

                    <img class="checked_icon" src="../static/icons/checked.png">


                    <p>
                      Recharge One time leet yskhbd dh
                    </p>
                  </div>


                  <div class="featureList">
                    <img class="checked_icon" src="../static/icons/checked.png">
                    <p>
                      Recharge One time leet yskhbd dh
                    </p>
                  </div>

                  <div class="featureList">
                    <img class="checked_icon" src="../static/icons/checked.png">
                    <p>
                      Recharge One time leet yskhbd dh
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

                <ion-col>
                  <ion-card class="serviceCard">
                    <img src="../static/images/dstvLogo.png">
                  </ion-card>
                </ion-col>

                <ion-col>
                  <ion-card class="serviceCard">
                    <img src="../static/images/goyvLogo.png">
                  </ion-card>
                </ion-col>

                <ion-col>
                  <ion-card class="serviceCard">
                    <img src="../static/images/mtnLogo.png">
                  </ion-card>
                </ion-col>
                <ion-col>
                  <ion-card class="serviceCard">
                    <img src="../static/images/airtelLogo.png">
                  </ion-card>
                </ion-col>
                <ion-col>
                  <ion-card class="serviceCard">
                    <img src="../static/images/gloLogo.png">
                  </ion-card>
                </ion-col>

              </ion-row>

              <ion-row>
                <ion-col>
                  <ion-card class="serviceCard">
                    <img src="../static/images/spectranetLogo.png">
                  </ion-card>
                </ion-col>


                <ion-col>
                  <ion-card class="serviceCard">
                    <img src="../static/images/9mobileLogo.png">
                  </ion-card>
                </ion-col>

                <ion-col>
                  <ion-card class="serviceCard">
                    <img src="../static/images/ipnxLogo.png">
                  </ion-card>
                </ion-col>

                <ion-col>
                  <ion-card class="serviceCard">
                    <img src="../static/images/dstvLogo.png">
                  </ion-card>
                </ion-col>

                <ion-col>
                  <ion-card class="serviceCard">
                    <img src="../static/images/mtnLogo.png">
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
    export default {
        layout: 'noSideBar',
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
    /* max-width: 50%;*/
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
    height: 9vh !important;
  }

  .serviceCard img {
    max-height: 5vh !important;
  }


  ion-thumbnail {
    width: 100%;
    border: solid #7F828B;
    height: 50%;

  }


  @media only screen and (max-width: 760px) {
    .section1 {
      color: white;
      width: 100vw;
      height: 75vh;
      background-image: url("../static/images/user1.png");
      display: flex;
      flex-direction: column;
      background-repeat: no-repeat;

      background-size: cover;


    }

    .section2 {
      margin-top: 1px;
    }

    .section2Content {

      max-width: 100%;
      padding-top: 1px;
      text-align: center;

    }

    .logoContainer {
      display: none;
    }

    .header_content {
      margin: 55% auto;
    }

    .section3 {
      margin: 1px auto;
    }

    .section3 > h1 {
      width: 80%;
      margin: 1px auto;
    }

    .serviceCard {
      margin: 0;
    }

    .featureList {
      justify-content: center;
    }


    .serviceList {
      width: 90%;
    }


  }

  .checked_icon {
    height: 5vh;
  }


</style>
