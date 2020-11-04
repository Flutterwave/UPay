<template>


  <div>
    <ion-header translucent>
      <ion-toolbar>

        <ion-title>Home</ion-title>

<profile-button class="ion-hide-md-up"></profile-button>

      </ion-toolbar>
    </ion-header>

    <ion-content fullscreen class="ion-padding">

      <user-details></user-details>
      <ion-card style="">
<ion-card-header>
 Payment Services
</ion-card-header>

        <ion-card-content>
          <ion-grid>
            <ion-row>
              <ion-col size="6">
                <NuxtLink to="/make-payment/airtime" class="no-underline" >
                  <ion-card class="centralise">
                    <ion-card-content>

                      <p>Airtime</p>
                      <ion-icon name="call-outline"  class="icon-size-mid"></ion-icon>
                    </ion-card-content>
                  </ion-card>

                </NuxtLink>


              </ion-col>



              <ion-col size="6">
                <NuxtLink to="/make-payment/data" class="no-underline" >
                  <ion-card class="centralise">
                    <ion-card-content>

                      <p>Data</p>
                      <ion-icon name="globe-outline"  class="icon-size-mid"></ion-icon>
                    </ion-card-content>
                  </ion-card>

                </NuxtLink>


              </ion-col>

                 <ion-col size="6">
                       <NuxtLink to="/make-payment/cable" class="no-underline" >
                         <ion-card class="centralise">
                           <ion-card-content>

                             <p>Cable</p>
                             <ion-icon name="tv-outline"  class="icon-size-mid"></ion-icon>
                           </ion-card-content>
                         </ion-card>

                       </NuxtLink>


                     </ion-col>

                     <ion-col size="6">
                       <NuxtLink to="/make-payment/power" class="no-underline" >
                         <ion-card class="centralise">
                           <ion-card-content>

                             <p>Power</p>
                             <ion-icon name="bulb-outline"  class="icon-size-mid"></ion-icon>
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
