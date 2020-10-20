<template>

  <div>

    <a-tabs tab-position="top">
      <a-tab-pane key="fund">
        <template v-slot:tab>
        <span>
Fund Wallet        </span>
        </template>

        <fund-wallet></fund-wallet>

      </a-tab-pane>
      <a-tab-pane key="payment">
        <template v-slot:tab>
        <span>
          Make Payment
        </span>
        </template>
       <payment-list></payment-list>
      </a-tab-pane>

      <a-tab-pane key="history">
        <template v-slot:tab>
        <span>
          History
        </span>
        </template>
<history></history>
      </a-tab-pane>






    </a-tabs>

  </div>

</template>

<script lang="ts">
import Vue from 'vue'



export default Vue.extend({
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
