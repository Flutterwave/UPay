<template>
  <div>
    <ion-header translucent>
      <ion-toolbar>
        <back-button></back-button>

        <ion-title>Buy Cable Subscription</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content fullscreen class="ion-padding">


      <ion-card class="card_padding">

        <ion-item>

          <ion-label position="floating">Provider</ion-label>
          <ion-select  :value="paymentData.provider" @ionChange="paymentData.provider = $event.target.value" >
            <ion-select-option v-for="item in providers" :key="item.code" :value="item.code">{{item.name}}</ion-select-option>


          </ion-select>
        </ion-item>
        <!--
        //08123007075
        -->


        <ion-grid>
          <ion-row>
            <ion-col size="8" >
              <ion-item>
                <ion-label position="floating">Package</ion-label>
                <ion-select  :value="paymentData.type" @ionChange="paymentData.type = $event.target.value" >
                  <ion-select-option v-for="item in selectedNetworkDataPackage" :key="item.id" :value="item.biller_name" >{{ getDataValue(item.biller_name) }}</ion-select-option>
                  <!-- <ion-select-option>AIRTEL</ion-select-option>
                   <ion-select-option>ETISALAT</ion-select-option> <ion-select-option>GLO</ion-select-option>
-->
                </ion-select>

              </ion-item>
            </ion-col>

            <ion-col >
              <ion-item>
                <ion-label position="floating">Price</ion-label>
                <ion-input :value="paymentData.amount" disabled></ion-input>
              </ion-item>

            </ion-col>
          </ion-row>
        </ion-grid>



        <ion-item>

          <ion-label position="floating">Device Number</ion-label>

          <ion-input   debounce="0"
                       :value="paymentData.mobileNumber"
                       @ionInput="paymentData.mobileNumber = $event.target.value"
          ></ion-input>
        </ion-item>






        <ion-button  expand="block" class="centralise margin_top" @click="makePayment">PURCHASE</ion-button>


      </ion-card>

    </ion-content>


  </div>
</template>

<script>

    export default {
        name: "BuyCable",
        data(){
            return {
                allNetworkDataPackage: this.$MOCK_DATA.billCategories,
                paymentData: {
                    network: '',
                    provider: '',
                    networkName: '',
                    billerCode: '',
                    dataPackageId: '',
                    mobileNumber: '',
                    amount: '',
                    type: '',
                } ,
                isSubmitting: false,
                providers : [ {
                    name: "DSTV",
                    code: "BIL121"
                },
                    {
                        name: "GOTV",
                        code: "BIL122"
                    },
                    {
                        name: "Startimes",
                        code: "BIL123"
                    }],

                selectedNetworkDataPackage: [],
                selectedNetworkData: {}
            }
        },
        watch: {
            'paymentData.network' : function(val){
                console.log("Selected Network", val)
                let dataPackage = this.allNetworkDataPackage.filter((item)=>{
                        return item.biller_code == val
                    }

                );

                let selectedNetwork =   this.networks.filter(
                    (item)=> {
                        return  item.code == val
                    }
                )
                console.log("SELEcted Network", selectedNetwork)

                this.selectedNetworkDataPackage = dataPackage
                this.paymentData.networkName = selectedNetwork[0].name
            },
            'paymentData.type' : function(val){
                console.log("Selected Network", val)
                let dataPackage = this.allNetworkDataPackage.filter((item)=>{
                        return item.biller_name == val
                    }

                );
                console.log("DATA Package", dataPackage)
                this.paymentData.amount = dataPackage[0].amount
            },
            //   deep: true
        },
        methods: {
            generateReference(){
                let date = new Date()
                return date.getTime().toString();
            },

            getDataValue(dataString){

                let values = dataString.split(" ");
                let dataValue = values[1]+values[2]
                return dataValue.replace('data','')
            },

            async makePayment() {

                let  paymentParams = {
                    "amount": 0,
                    "customer": this.paymentData.mobileNumber,
                    "recurrence": "ONCE",
                    "package_data": "DATA",
                    "country": "NG",
                    //  "biller_name": this.paymentData.networkName + " DATA BUNDLE",
                    "biller_name": this.paymentData.type,
                    //   type: this.paymentData.type,
                    type: this.paymentData.networkName + " DATA BUNDLE",
                    "reference": this.generateReference()
                } ;

                console.log(paymentParams)

                this.$Utils.showSpinner( "Processing...")


                let paymentResponse = await this.$axios.$post('/bills', paymentParams)
                console.log(paymentResponse)
                if(paymentResponse.status == '201' ){
                    this.$Utils.dismissSpinner()

                    this.$Utils.presentToast("Cable Subscription is Successful")

                }
            },

        } ,

    }
</script>

<style scoped>

</style>
