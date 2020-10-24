<template>
  <div>


    <div class="card">
      <div class="header">
        <div class="avatar">
          <img :src="profileImage" alt="">
        </div>
      </div>
      <div class="card-body">
        <div class="user-meta ion-text-center">
          <h3 class="playername">Roger Federer</h3>
          <h5 class="country">Switzerland</h5>

        </div>

      </div>
    </div>








  </div>
</template>

<script>

    export default {
        name: 'user-details',
        data(){
            return {

                profileImage : "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
            }
        } ,
        methods: {


        }
    }
</script>
<style>

  .card {
    margin: 0 auto;
    color: #F7F8FB !important;
  }

  .header {
    height: 20vh;
    background: #f5a623;
  }

  .avatar {
    width: 15vh;
    height: 15vh;
    position: relative;
    margin: 0 auto;
  }
  img {
    display: block;
    border-radius: 50%;
    position: absolute;
    bottom: calc(-1*(80px + 4px));
    border: 8px solid #f5a623;
    background-color: #fff;
  }


    .card-body {
      background-color: #222428;
      padding: 30px;
      height: 25vh;
      overflow: hidden;
    }
      .user-meta {
        padding-top: 40px;
      }
        .playername {
          font-size: 24px;
          font-weight: 600;
          color: #ffffff;
        }

        .country {
          font-size: 90%;
          color: #949ea6;
          text-transform: uppercase;
          margin: 0 auto;
        }









</style>
