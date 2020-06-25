import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'

import VueI18n from 'vue-i18n';

import { ENGLISH_TRANSLATIONS } from './local/local-en';
import { FRENCH_TRANSLATIONS } from './local/local-fr';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueI18n);

Vue.config.productionTip = false

const TRANSLATIONS = {
  en: ENGLISH_TRANSLATIONS,
  fr: FRENCH_TRANSLATIONS
}

const i18n = new VueI18n({
  locale: 'en',
  messages: TRANSLATIONS,
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
