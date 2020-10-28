import Vue from 'vue';
import Flutterwave from  'flutterwave-vue-v3'

//my test key
//let publicKey = "FLWPUBK_TEST-0b04581c8d73fd08d5c720e1e0f803b4-X";


let publicKey = "FLWPUBK-125e42ff0e9cb330a3555b252f4fa55e-X"

Vue.use(Flutterwave, {publicKey});

