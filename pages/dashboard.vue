<template>

  <div>

    <ion-tabs>
      <ion-tab tab="payments">
        <payment-list></payment-list>
      </ion-tab>

      <ion-tab tab="fund">
        <fund-wallet></fund-wallet>
      </ion-tab>

      <ion-tab tab="history">
        <history></history>
      </ion-tab>


      <ion-tab-bar id="tab-bar" slot="bottom">


        <ion-tab-button tab="fund">
          <ion-label>Fund Wallet</ion-label>
          <ion-icon name="wallet-outline"></ion-icon>
        </ion-tab-button>


        <ion-tab-button tab="payments">
          <ion-label>Home</ion-label>
          <ion-icon name="grid-outline"></ion-icon>
        </ion-tab-button>

        <ion-tab-button tab="history">
          <ion-label>History</ion-label>
          <ion-icon name="bar-chart-outline"></ion-icon>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>

  </div>


</template>


<script>
    import FundWallet from "~/components/fund-wallet.vue";
    import PaymentList from "~/components/payment-list.vue";
    import History from "~/components/history.vue";


    export default {
        components: {History, PaymentList, FundWallet},
        data() {
            return {
                sKey: process.env.sKey
            }
        },
        async mounted() {

            let userDetails = this.$UserHelper.getUserDetails();
            if (!userDetails.token) {
                this.$Utils.navigateTo('/login')
            } else {
                try {

                    this.$store.commit('app/setWalletFetchStatus', true);

                    let res = await this.$axios.$get('balance');
                    this.$store.commit('wallet/update', res.data.wallet_amount);
                    this.$store.commit('app/setWalletFetchStatus', false)
                } catch (e) {
                    this.$store.commit('app/setWalletFetchStatus', false);
                    this.$Utils.navigateTo('/login')
                }

            }


            //todo: Refactor this
            if (true) {
                const api = this.$axios.create({
                    headers: {
                        common: {
                            Accept: 'text/plain, */*',
                        },
                        'X-Requested-With': "browser",
                        'Authorization': `Bearer ${this.sKey}`
                    }
                });
                let billCategories = await api.$get("https://cors-anywhere.herokuapp.com/https://api.flutterwave.com/v3/bill-categories");
                this.$store.commit('app/setBillsData', billCategories.data);

            }

        },
        methods: {}


    }
</script>

<style scoped>

  @media only screen and (min-width: 760px) {
    #tab-bar {
      display: none;
    }
  }
</style>
