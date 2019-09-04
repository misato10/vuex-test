import Vue from 'vue'
import App from './App.vue'
import store from './store.js'


Vue.config.productionTip = false

new Vue({
  store, // storeをローカルに登録
  render: h => h(App),
}).$mount('#app')
