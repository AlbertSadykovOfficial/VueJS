// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// Импортируем стили 
require('./assets/app.css')
import { store } from './store/store'; // Хранилище Vuex (npm install vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // Добавляем хранилище Vuex в экземпляр Vue.js
  components: { App },
  template: '<App/>'
})
