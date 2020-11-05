<template>

  <div>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>

    </ion-header>

    <ion-content class="ion-padding" fullscreen>


      <ion-card class="card_padding centralized_card">


        <ion-item>
          <ion-label position="floating">Email</ion-label>

          <ion-input
            :value="userData.email"
            @ionInput="userData.email = $event.target.value"
            debounce="0"
            type="email"></ion-input>

        </ion-item>

        <ion-item>
          <ion-label position="floating">Password</ion-label>

          <ion-input
            :value="userData.password"
            @ionInput="userData.password = $event.target.value"
            debounce="0"
            type="password"></ion-input>

        </ion-item>


        <ion-button :disabled="!userData.email || !userData.password" @click="login" class="centralise margin_top"
                    expand="block">Submit
        </ion-button>


        <div class="centralise">
          <p class="bold"> OR</p>
          <NuxtLink to="/signup">Sign Up</NuxtLink>
        </div>


      </ion-card>

    </ion-content>


  </div>


</template>

<script>

    export default {
        name: 'login',
        layout: 'noSideBar',
        data() {
            return {
                userData: {
                    email: "",
                    password: ""
                }
            }
        },
        methods: {
            async login() {

                this.$Utils.showSpinner("Processing...");

                try {
                    let userLoginResponse = await this.$axios.$post('/auth/signin', this.userData);
                    console.log(userLoginResponse);

                    if (userLoginResponse.status == '200') {

                        this.$Utils.dismissSpinner();
                        this.$Utils.presentToast("Login Is Successful");
                        //save the user details

                       this.$UserHelper.updateUserDetails(userLoginResponse.data);
                        this.$UserHelper.updateUserToken(userLoginResponse.data.token);

                        this.$Utils.navigateTo('/dashboard')

                    }
                } catch (e) {
                    this.$Utils.dismissSpinner();
                    this.$Utils.presentToast("Login Failed.Please Verify Your Details");
                }

            },

        }
    }

</script>
