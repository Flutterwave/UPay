<template>

  <div>

  <p>Welcome John Doe</p>

  <p>Available Balance : #3000</p>

  <NuxtLink to="/fund-wallet"> Fund</NuxtLink>


<p>Payment List</p>

<div>
  <NuxtLink to="/make-payment/airtime"> Airtime</NuxtLink>
  <NuxtLink to="/make-payment/data"> Data</NuxtLink>
  <NuxtLink to="/make-payment/cable"> Cable</NuxtLink>
  <NuxtLink to="/make-payment/power"> Power</NuxtLink>


</div>



  </div>


</template>

<script>
    export default {
        name: "payment-list"
    }
</script>

<style scoped>

</style>
