// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
Vue.config.productionTip = false

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale:'zh-CN',
  messages:{
    'zh-CN':require('./common/lang/zh'),
    'en-US':require('./common/lang/en')
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
