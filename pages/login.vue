<template>

  <div>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>

    </ion-header>

    <ion-content fullscreen class="ion-padding">


      <ion-card class="card_padding centralized_card">



        <ion-item>
          <ion-label position="floating">Email</ion-label>

          <ion-input
            debounce="0"
            type="email"
            :value="userData.email"
            @ionInput="userData.email = $event.target.value"></ion-input>

        </ion-item>

        <ion-item>
          <ion-label position="floating">Password</ion-label>

          <ion-input
            debounce="0"
            type="password"
            :value="userData.password"
            @ionInput="userData.password = $event.target.value"></ion-input>

        </ion-item>



        <ion-button :disabled="!userData.email || !userData.password"  expand="block" class="centralise margin_top"  @click="login" >Submit</ion-button>



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
        mounted(){

        },
        methods: {
            async  login() {

                console.log(this.userData)

                let loginData = {
                    ...this.userData
                }

                this.$Utils.showSpinner("Processing...")

                try {
 let userLoginResponse = await this.$axios.$post('/auth/signin', loginData)
                console.log(userLoginResponse)
                if (userLoginResponse.status == '200') {

                    this.$Utils.dismissSpinner()
                    this.$Utils.presentToast("Login Is Successful");
                    //save the user details

                    this.$UserHelper.updateUserDetails(userLoginResponse.data)
                    this.$UserHelper.updateUserToken(userLoginResponse.data.token)

                    this.$Utils.navigateTo('/dashboard')

                    /*  country: "nigeria"
                    email: "user3@mail.com"
                    f_name: "user3"
                    id: 4
                    l_name: "user3"
                    phone: "097656667"
                    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjo0LCJpbmZvIjoidXNlcjMgdXNlcjMiLCJpYXQiOjE2MDM1NTcyNDksImV4cCI6MTYwMzYwMDQ0OX0.LDgbiE1z9ovpjhGWxVVCtCAb9k6N7qS2OKhYg_cI08M"
                    status: 200    */


                } else if (userLoginResponse.status == '404') {
                    this.$Utils.dismissSpinner()

                    this.$Utils.presentToast("Login Failed.Please Verify Your Details");


                }
            }
            catch (e) {
                    this.$Utils.dismissSpinner()

                    this.$Utils.presentToast("Login Failed.Please Verify Your Details");
                }

            },

        }
    }

</script>
