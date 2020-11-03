<template>
  <div>


    <div class="card">

      <div class="card-body">
        <div class="avatar">

          <img :src="profileImage" alt="">
        </div>



        <div class="user-meta ion-text-center">
          <h2 style="">Welcome</h2>
          <h3 class="username">{{username}}</h3>
          <span>
              <h5 class="wallet">
                Wallet Balance :
                 <ion-spinner v-if="walletFetchInProgress" name="lines-small"></ion-spinner>
             <span v-else>  {{wallet}}</span>


              </h5>
          </span>

            <!--<ion-spinner v-if="walletFetchInProgress" name="lines-small"></ion-spinner>
           -->

        </div>

      </div>
    </div>



  </div>
</template>

<script>
   /* country: "nigeria"
    email: "user3@mail.com"
    f_name: "user3"
    id: 4
    l_name: "user3"
    phone: "097656667"
    token: "eyJhbGciOiJIUzI1NiI*/
    export default {
        name: 'UserDetails',
        data(){
            return {
                userDetails: {
                    f_name: '',
                    l_name: ''
                },
               // wallet: '0',
                profileImage : "images/userIcon.png"
            }
        } ,
        computed: {
            wallet () {
                return this.$store.state.wallet.amount
            },
            walletFetchInProgress () {
                return this.$store.state.app.walletFetchInProgress
            },
            username(){
                return  this.userDetails.f_name + " " + this.userDetails.l_name
            }
        },

        mounted(context){
         //   console.log("User Details", this.$UserHelper.getUserDetails())

            this.userDetails = this.$UserHelper.getUserDetails()
          /*  this.$Wallet.fetchUserWallet().then((res) =>{
                this.wallet = this.$Wallet.userWallet
            })*/



        },
        methods: {




        }
    }
</script>
<style scoped>
  ion-spinner{
    --color: #f7a622 !important;
  }

  .card {
    margin: 0 auto;
    color: #f7a622 !important;
    margin-top: 6vh;
    border-radius: 4px;
  }

  .card-body {
    background-color: #070f36;
    padding: 30px;
    overflow: visible;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;

    /*  height: 25vh;*/

  }

  .header {
    height: 20vh;
    background: #f5a623;
  }

  .avatar {
    width: 10vh;
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  img {
    display: block;
    border-radius: 50%;
    position: absolute;
    top: calc(-1*(65px + 4px));
    border: 8px solid #f5a623;
    background-color: #fff;
  }


      .user-meta {

      }
        .username {
          font-size: 24px;
          font-weight: 600;
          color: #ffffff;
          text-transform: capitalize;
        }

        .wallet {
          font-size: 90%;
          //color: #949ea6;
          text-transform: uppercase;
          margin: 0 auto;
        }









</style>
