<template>
  <ion-app>

    <nuxt v-if="isMobileView"/>


    <ion-split-pane v-else when="sm" content-id="main-content">
      <ion-menu content-id="main-content" :swipe-gesture="false">
        <ion-header>
          <ion-toolbar color="#070e36" style="background-color: #070e36;color: white">


            <div class="logoContainer">
              <img class="logoImg" src="../static/images/logo.png">&nbsp;
              <p>OSS</p>
            </div>



<!--

            <ion-title>Menu</ion-title>-->
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <ion-list>
            <ion-list-header>

            </ion-list-header>
            <ion-menu-toggle auto-hide="false">


              <ion-item button @click="$Utils.navigateTo('/dashboard')">
                <ion-icon slot="start" name='home'></ion-icon>
                <ion-label>
                  Dashboard
                </ion-label>
              </ion-item>


              <ion-item-group>
                <ion-item-divider>
                  <ion-label>Purchase VAS</ion-label>
                </ion-item-divider>

                <ion-item button @click="$Utils.navigateTo('/make-payment/airtime')">
                  <ion-icon slot="start" name='call-outline'></ion-icon>
                  <ion-label>
                    Airtime
                  </ion-label>
                </ion-item>

                <ion-item button @click="$Utils.navigateTo('/make-payment/data')">
                  <ion-icon slot="start" name='globe-outline'></ion-icon>
                  <ion-label>
                    Data
                  </ion-label>
                </ion-item>

                <ion-item button @click="$Utils.navigateTo('/make-payment/cable')">
                  <ion-icon slot="start" name='tv-outline'></ion-icon>
                  <ion-label>
                    Cable
                  </ion-label>
                </ion-item>

                <ion-item button @click="$Utils.navigateTo('/make-payment/power')">
                  <ion-icon slot="start" name='bulb-outline'></ion-icon>
                  <ion-label>
                    Power
                  </ion-label>
                </ion-item>

              </ion-item-group>


              <ion-item-group>
                <ion-item-divider>
                  <ion-label>Others</ion-label>
                </ion-item-divider>

                <ion-item button @click="$Utils.navigateTo('/fund-wallet')">
                  <ion-icon slot="start" name='wallet-outline'></ion-icon>
                  <ion-label>
                    Fund Wallet
                  </ion-label>
                </ion-item>


                <ion-item button @click="$Utils.navigateTo('/history')">
                  <ion-icon slot="start" name='bar-chart-outline'></ion-icon>
                  <ion-label>
                    History
                  </ion-label>
                </ion-item>

                <ion-item button @click="$UserHelper.logOut()">
                  <ion-icon slot="start" name='power-outline'></ion-icon>
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
                let recaptchaScript = document.createElement('script')
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
</style>
