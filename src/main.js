import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

/*距离太远，要传数据，就用到数据总线*/
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
