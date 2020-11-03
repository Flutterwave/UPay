<template>

  <div>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Sign Up</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content fullscreen class="ion-padding">


      <ion-card class="card_padding">

        <ion-item>
          <ion-label position="floating">First Name</ion-label>

          <ion-input
            debounce="0"
            :value="newUserData.firstName"
            @ionInput="newUserData.firstName = $event.target.value"></ion-input>

        </ion-item>

        <ion-item>
          <ion-label position="floating">Last Name</ion-label>

          <ion-input
            debounce="0"
            :value="newUserData.lastName"
            @ionInput="newUserData.lastName = $event.target.value"></ion-input>

        </ion-item>

        <ion-item>
          <ion-label position="floating">Email</ion-label>

          <ion-input
            debounce="0"
            type="email"
            :value="newUserData.email"
            @ionInput="newUserData.email = $event.target.value"></ion-input>

        </ion-item>

        <ion-item>
          <ion-label position="floating">Mobile Number</ion-label>

          <ion-input
            type="tel"
            debounce="0"
            :value="newUserData.phone"
            @ionInput="newUserData.phone = $event.target.value"></ion-input>

      <!--    <input type="">-->

        </ion-item>

        <ion-item>
          <ion-label position="floating">Country</ion-label>

          <ion-input
            debounce="0"
            :value="newUserData.country"
            @ionInput="newUserData.country = $event.target.value"></ion-input>

        </ion-item>
        <ion-item>
          <ion-label position="floating">Password</ion-label>

          <ion-input
            debounce="0"
            type="password"
            :value="newUserData.password"
            @ionInput="newUserData.password = $event.target.value"></ion-input>

        </ion-item>



        <ion-button  expand="block" class="centralise margin_top"  @click="signUp" >Submit</ion-button>


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
          async  signUp() {

                console.log(this.newUserData)

              let signUpData = {
                  "f_name": this.newUserData.firstName,
                  "l_name": this.newUserData.lastName,
                  "email": this.newUserData.email,
                  "phone": this.newUserData.phone,
                  "country": this.newUserData.country,
                  "password": this.newUserData.password
              }

              this.$Utils.showSpinner('Processing')
  let userSignUpResponse = await this.$axios.$post('/auth/signup', signUpData)
                console.log(userSignUpResponse)
                if(userSignUpResponse.status == '201' ){

                    this.$Utils.dismissSpinner()
        this.$Utils.presentToast("Sign Up is successful");

                    //save the user details

             this.$UserHelper.updateUserDetails(userSignUpResponse.data)
                    this.$UserHelper.updateUserToken(userSignUpResponse.data.token)

                    this.$Utils.navigateTo('/')



                }


            /*  country: "nigeria"
              email: "iser1@mail.com"
              f_name: "user1"
              id: 2
              l_name: "user1"
              phone: "090876789"
              token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoyLCJpbmZvIjoidXNlcjEgdXNlcjEiLCJpYXQiOjE2MDM1NTQxODksImV4cCI6MTYwMzU5NzM4OX0.529T-fUZv90VzdxpEhhMt42Vmww5jx3nRaQvkObkjLU"
              status: 201
*/







let signUpdata = {
    "f_name": "string",
    "l_name": "string",
    "email": "string",
    "phone": "string",
    "country": "string",
    "password": "string"
}
            },
        }
    }

</script>
