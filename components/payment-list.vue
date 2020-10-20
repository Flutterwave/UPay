<template>

  <div>

    <div>
      <p>Welcome John Doe</p>

      <p>Available Balance : #3000</p>
    </div>


    <div>



      <a-card title="Available Services">


      <a-card-grid style="width:50%;text-align:center">
        <NuxtLink to="/make-payment/:airtime"> Airtime</NuxtLink>
      </a-card-grid>

      <a-card-grid style="width:50%;text-align:center">
        <NuxtLink to="/make-payment/data"> Data</NuxtLink>

      </a-card-grid>


      <a-card-grid style="width:50%;text-align:center">
        <NuxtLink to="/make-payment/cable"> Cable</NuxtLink>

      </a-card-grid>

      <a-card-grid style="width:50%;text-align:center">
        <NuxtLink to="/make-payment/power"> Power</NuxtLink>

      </a-card-grid>

      </a-card>
    </div>






    <div>



    </div>


  </div>


</template>

<script>
    export default {
        name: "PaymentList"
    }
</script>

<style scoped>

</style>
