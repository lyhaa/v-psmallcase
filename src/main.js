import Vue from 'vue'
import App from './App.vue'
import Vant from "vant"
import "vant/lib/index.css"
import router from './router/index.js';
import "./libs/rem.js";
Vue.config.productionTip = false
Vue.use(Vant);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
