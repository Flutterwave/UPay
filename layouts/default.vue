<template>
  <ion-app>

    <nuxt v-if="isMobileView"/>


    <ion-split-pane content-id="main-content" v-else when="sm">
      <ion-menu :swipe-gesture="false" content-id="main-content">
        <ion-header>
          <ion-toolbar color="#070e36" style="background-color: #070e36;color: white">


            <a class="logoContainer logoLink" href="/">

              <img class="logoImg" src="../static/images/logo.png">&nbsp;
              <p>UPay</p>


            </a>

            <p class="icon-inner"></p>


          </ion-toolbar>
        </ion-header>

        <ion-content>
          <ion-list>
            <ion-list-header>

            </ion-list-header>
            <ion-menu-toggle auto-hide="false">


              <ion-item @click="$Utils.navigateTo('/dashboard')" button>
                <ion-icon name='home' slot="start"></ion-icon>
                <ion-label>
                  Dashboard
                </ion-label>
              </ion-item>


              <ion-item-group>
                <ion-item-divider>
                  <ion-label>Purchase VAS</ion-label>
                </ion-item-divider>


                <ion-item @click="$Utils.navigateTo('/make-payment/airtime')" button>
                  <ion-icon name='call-outline' slot="start"></ion-icon>
                  <ion-label>
                    Airtime
                  </ion-label>
                </ion-item>

                <ion-item @click="$Utils.navigateTo('/make-payment/data')" button>
                  <ion-icon name='globe-outline' slot="start"></ion-icon>
                  <ion-label>
                    Data
                  </ion-label>
                </ion-item>

                <ion-item @click="$Utils.navigateTo('/make-payment/cable')" button>
                  <ion-icon name='tv-outline' slot="start"></ion-icon>
                  <ion-label>
                    Cable
                  </ion-label>
                </ion-item>

                <ion-item @click="$Utils.navigateTo('/make-payment/power')" button>
                  <ion-icon name='bulb-outline' slot="start"></ion-icon>
                  <ion-label>
                    Power
                  </ion-label>
                </ion-item>

              </ion-item-group>


              <ion-item-group>
                <ion-item-divider>
                  <ion-label>Others</ion-label>
                </ion-item-divider>

                <ion-item @click="$Utils.navigateTo('/fund-wallet')" button>
                  <ion-icon name='wallet-outline' slot="start"></ion-icon>
                  <ion-label>
                    Fund Wallet
                  </ion-label>
                </ion-item>


                <ion-item @click="$Utils.navigateTo('/history')" button>
                  <ion-icon name='bar-chart-outline' slot="start"></ion-icon>
                  <ion-label>
                    History
                  </ion-label>
                </ion-item>

                <ion-item @click="$UserHelper.logOut()" button>
                  <ion-icon name='power-outline' slot="start"></ion-icon>
                  <ion-label>
                    Logout
                  </ion-label>
                </ion-item>


              </ion-item-group>


            </ion-menu-toggle>
          </ion-list>
        </ion-content>
      </ion-menu>

      <div class="ion-page" id="main-content">

        <nuxt/>
      </div>

    </ion-split-pane>


  </ion-app>

</template>
<script>

    export default {

        data() {
            return {
                isMobileView: false
            }
        }
        ,
        created() {
            if (process.browser) {
                let recaptchaScript = document.createElement('script');
                recaptchaScript.setAttribute('src', 'https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js')
                //  document.body.appendChild(recaptchaScript)
            }
        }
    }
</script>

<style scoped>
  .logoContainer {
    margin: 2vh 8vh;
    display: flex;
    align-items: center;
  }

  .logoLink {
    text-decoration: none;
  }

</style>
