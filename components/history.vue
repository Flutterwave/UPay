<template>
  <div>

    <ion-header translucent>
    <ion-toolbar>
      <ion-title >History</ion-title>
      <profile-button></profile-button>

    </ion-toolbar>

  </ion-header>



  <ion-content fullscreen class="">


  <ion-card style="margin-top: 1vh">

      <ion-card-content class="no-padding">
        <ion-toolbar>
          <ion-segment value="all" @ionChange="segmentChanged($event)">
            <ion-segment-button value="all">
              <ion-label>All</ion-label>
            </ion-segment-button>

            <ion-segment-button value="airtime">
              <ion-label>Airtime</ion-label>
            </ion-segment-button>

            <ion-segment-button value="data">
              <ion-label>Data</ion-label>
            </ion-segment-button>

          </ion-segment>
        </ion-toolbar>

        <div v-if="historyList.length > 0">

          <ion-list  >
            <ion-item>
              <ion-label v-for="item in historyList" :key="item.id">{{item.name}}</ion-label>
            </ion-item>

          </ion-list>


        </div>



        <div v-else>

          <ion-list>

            <ion-item v-for="index in 10" :key="index">

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
        data(){
            return {
                    allHistory: [],
                    historyList: []
                }
        } ,
       async mounted() {
            console.log("sync data")
            let history = await this.$axios.$get('/bills')
          this.allHistory = history.data;
           this.historyList = this.allHistory
        },
        computed :{
            airtimeHistory(){
                let history = this.allHistory.filter((item)=>
                item.package_data == 'Airtime')
                return history
            } ,
            dataHistory(){
                let history = this.allHistory.filter((item)=>
                    item.package_data == 'Data')
                return history
            }

        } ,
        methods:{
            segmentChanged (event){
                let selectedSegment = event.detail.value
                console.log("SEGMENT" ,selectedSegment)
                switch (selectedSegment) {
                    case 'all':
                        this.historyList = this.allHistory
                        break;

                    case 'airtime':
                        this.historyList = this.airtimeHistory
                        break;

                    case 'data':
                        this.historyList = this.dataHistory
                        break;

                }


            }
        }
    }
</script>

<style scoped>

</style>
