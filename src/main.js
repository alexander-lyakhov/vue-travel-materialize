import Vue from 'vue'
import App from './App.vue'

import '@/styles/reset.css'
import '@/styles/index.scss'

import 'materialize-css/dist/js/materialize.min';
import 'materialize-css/dist/css/materialize.min.css';

Vue.config.productionTip = false

new Vue({render: h => h(App)}).$mount('#app')
