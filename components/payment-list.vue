<template>


  <div>
    <ion-header translucent>
      <ion-toolbar>

        <ion-title>Home</ion-title>

        <profile-button class="ion-hide-md-up"></profile-button>

      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" fullscreen>

      <user-details></user-details>
      <ion-card style="">
        <ion-card-header>
          Payment Services
        </ion-card-header>

        <ion-card-content>
          <ion-grid>
            <ion-row>
              <ion-col size="6">
                <NuxtLink class="no-underline" to="/make-payment/airtime">
                  <ion-card class="centralise">
                    <ion-card-content>

                      <p>Airtime</p>
                      <ion-icon class="icon-size-mid" name="call-outline"></ion-icon>
                    </ion-card-content>
                  </ion-card>

                </NuxtLink>


              </ion-col>


              <ion-col size="6">
                <NuxtLink class="no-underline" to="/make-payment/data">
                  <ion-card class="centralise">
                    <ion-card-content>

                      <p>Data</p>
                      <ion-icon class="icon-size-mid" name="globe-outline"></ion-icon>
                    </ion-card-content>
                  </ion-card>

                </NuxtLink>


              </ion-col>

              <ion-col size="6">
                <NuxtLink class="no-underline" to="/make-payment/cable">
                  <ion-card class="centralise">
                    <ion-card-content>

                      <p>Cable</p>
                      <ion-icon class="icon-size-mid" name="tv-outline"></ion-icon>
                    </ion-card-content>
                  </ion-card>

                </NuxtLink>


              </ion-col>

              <ion-col size="6">
                <NuxtLink class="no-underline" to="/make-payment/power">
                  <ion-card class="centralise">
                    <ion-card-content>

                      <p>Power</p>
                      <ion-icon class="icon-size-mid" name="bulb-outline"></ion-icon>
                    </ion-card-content>
                  </ion-card>

                </NuxtLink>


              </ion-col>

            </ion-row>
          </ion-grid>
        </ion-card-content>

      </ion-card>

    </ion-content>

  </div>

</template>

<script>
    import ProfileButton from "./profile-button";
    import UserDetails from "./user-details";

    export default {
        name: "PaymentList",
        components: {UserDetails, ProfileButton}
    }
</script>

<style scoped>

</style>
