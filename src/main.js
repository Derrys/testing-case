import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Element from 'element-ui'
import './styles/element-variables.scss'

import './icons' // icon

import '@/styles/index.scss' // global css
import * as filters from './filters' // global filters

// vxe
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

import './main.css'


Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.use(Element)
Vue.use(VXETable)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
