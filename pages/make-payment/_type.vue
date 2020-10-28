<template>
  <div>


    <buy-airtime v-if="paymentType == 'airtime'"></buy-airtime>


    <buy-cable v-if="paymentType == 'cable'"></buy-cable>
    <buy-data v-if="paymentType == 'data'"></buy-data>
    <buy-electricity v-if="paymentType == 'power'"></buy-electricity>

  </div>


</template>

<script>
    import BuyAirtime from "../../components/buy-airtime";
    import BuyCable from "../../components/buy-cable";
    import BuyData from "../../components/buy-data";
    import BuyElectricity from "../../components/buy-electricity";
    export default {
        name: "make-payment",
        components: {BuyElectricity, BuyData, BuyCable, BuyAirtime},
        async asyncData(context) {
            let paymentType = context.params.type;

            return {
                paymentType
            }
        }
    }
</script>

<style scoped>

</style>
