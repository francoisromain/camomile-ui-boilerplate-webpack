import Vue from 'vue'
import app from './app.vue'
console.log('bouom')
new Vue({
  template: '<app/>',
  components: { app }
}).$mount('#app')
