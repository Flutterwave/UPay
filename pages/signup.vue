<template>

  <div>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Sign Up</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" fullscreen>


      <ion-card class="card_padding centralized_card  ">

        <ion-item>
          <ion-label position="floating">First Name</ion-label>

          <ion-input
            :value="newUserData.firstName"
            @ionInput="newUserData.firstName = $event.target.value"
            debounce="0"></ion-input>

        </ion-item>

        <ion-item>
          <ion-label position="floating">Last Name</ion-label>

          <ion-input
            :value="newUserData.lastName"
            @ionInput="newUserData.lastName = $event.target.value"
            debounce="0"></ion-input>

        </ion-item>

        <ion-item>
          <ion-label position="floating">Email</ion-label>

          <ion-input
            :value="newUserData.email"
            @ionInput="newUserData.email = $event.target.value"
            debounce="0"
            type="email"></ion-input>

        </ion-item>

        <ion-item>
          <ion-label position="floating">Mobile Number</ion-label>

          <ion-input
            :value="newUserData.phone"
            @ionInput="newUserData.phone = $event.target.value"
            debounce="0"
            type="tel"></ion-input>

        </ion-item>

        <ion-item>
          <ion-label position="floating">Country</ion-label>

          <ion-input
            :value="newUserData.country"
            @ionInput="newUserData.country = $event.target.value"
            debounce="0"></ion-input>

        </ion-item>
        <ion-item>
          <ion-label position="floating">Password</ion-label>

          <ion-input
            :value="newUserData.password"
            @ionInput="newUserData.password = $event.target.value"
            debounce="0"
            type="password"></ion-input>

        </ion-item>


        <ion-button
          :disabled="!newUserData.firstName || !newUserData.lastName || !newUserData.email || !newUserData.phone || !newUserData.password          "
          @click="signUp" class="centralise margin_top" expand="block">Submit
        </ion-button>


        <div class="centralise">
          <p class="bold"> OR</p>
          <NuxtLink to="/login">Login</NuxtLink>
        </div>


      </ion-card>

    </ion-content>


  </div>


</template>

<script>

    export default {
        name: 'sign_up',
        layout: 'noSideBar',
        data() {
            return {
                newUserData: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    country: "",
                    password: ""
                }
            }
        },
        methods: {
            async signUp() {

                let signUpData = {
                    "f_name": this.newUserData.firstName,
                    "l_name": this.newUserData.lastName,
                    "email": this.newUserData.email,
                    "phone": this.newUserData.phone,
                    "country": this.newUserData.country,
                    "password": this.newUserData.password
                };

                try{
                    this.$Utils.showSpinner('Processing');
                let userSignUpResponse = await this.$axios.$post('/auth/signup', signUpData);

                    this.$Utils.dismissSpinner();
                    this.$Utils.presentToast("Sign Up is successful");

                    //save the user details
                    this.$UserHelper.updateUserDetails(userSignUpResponse.data);
                    this.$UserHelper.updateUserToken(userSignUpResponse.data.token);

                    this.$Utils.navigateTo('/')

                } catch (e) {
                    this.$Utils.dismissSpinner();
                    this.$Utils.presentToast("Sign Up Failed.Please try again");
                }

            },
        }
    }

</script>
