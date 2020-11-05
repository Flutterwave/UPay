import Vue from 'vue';
import Flutterwave from 'flutterwave-vue-v3'

let publicKey = process.env.pKey;

Vue.use(Flutterwave, {publicKey});

