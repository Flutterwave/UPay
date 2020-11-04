<template>
  <div>

    <ion-header translucent>
      <ion-toolbar>
        <ion-title>History</ion-title>
        <profile-button class="ion-hide-md-up"></profile-button>

      </ion-toolbar>

    </ion-header>


    <ion-content class="" fullscreen>


      <ion-card style="margin-top: 1vh;height: 100vh">

        <ion-card-content class="no-padding">
          <ion-toolbar>
            <ion-segment @ionChange="segmentChanged($event)" value="all">

              <ion-segment-button value="all">
                <ion-label>All</ion-label>
              </ion-segment-button>


              <ion-segment-button value="airtime">
                <ion-label>Airtime</ion-label>
              </ion-segment-button>

              <ion-segment-button value="data">
                <ion-label>Data</ion-label>
              </ion-segment-button>
              <ion-segment-button value="cable">
                <ion-label>Cable</ion-label>
              </ion-segment-button>

              <ion-segment-button value="power">
                <ion-label>Power</ion-label>
              </ion-segment-button>


            </ion-segment>
          </ion-toolbar>

          <div v-if="historyIsFetched">

            <ion-list>

              <ion-item :key="item.id" v-for="item in historyList">

                <ion-label>
                  <h3>
                    Category: {{item.package_data}}
                  </h3>
                  <p>
                    Item: {{item.biller_name}}
                  </p>
                  <p>
                    Price: ₦{{item.amount}}
                  </p>
                  <p>
                    DateTime: {{new Date(item.created_at).toLocaleString()}}
                  </p>
                </ion-label>
              </ion-item>


            </ion-list>


          </div>


          <div v-else>

            <ion-list>

              <ion-item :key="index" v-for="index in 10">

                <ion-label>
                  <h3>
                    <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
                  </h3>
                  <p>
                    <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
                  </p>
                  <p>
                    <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
                  </p>
                  <p>
                    <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
                  </p>
                </ion-label>
              </ion-item>

            </ion-list>

          </div>


        </ion-card-content>
      </ion-card>

    </ion-content>
  </div>
</template>

<script>
    export default {
        name: "History",
        data() {
            return {
                allHistory: [],
                historyList: [],
                historyIsFetched: false
            }
        },
        async mounted() {
            console.log("sync data");
            let history = await this.$axios.$get('/bills');
            this.allHistory = history.data;
            this.historyList = this.allHistory;
            this.historyIsFetched = true
        },
        computed: {
            airtimeHistory() {
                let history = this.allHistory.filter((item) =>
                    item.package_data == 'Airtime');
                return history
            },
            dataHistory() {
                let history = this.allHistory.filter((item) =>
                    item.package_data == 'DATA');
                return history
            },

        },
        methods: {
            segmentChanged(event) {
                let selectedSegment = event.detail.value;
                console.log("SEGMENT", selectedSegment);

                if (selectedSegment == 'all') {
                    this.historyList = this.allHistory
                } else {
                    this.historyList = this.allHistory.filter((item) => {
                        return (item.package_data.toLocaleLowerCase() == selectedSegment.toLocaleLowerCase())

                    })

                }
                /*  switch (selectedSegment) {
                    case 'all':
                        this.historyList = this.allHistory
                        break;

                    case 'airtime':
                        this.historyList = this.airtimeHistory
                        break;

                    case 'data':
                        this.historyList = this.dataHistory
                        break;

                }*/


            }
        }
    }
</script>

<style scoped>

</style>
