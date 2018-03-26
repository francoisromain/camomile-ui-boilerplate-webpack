import Vue from 'vue'
import app from './app.vue'

new Vue({
  components: { app },
  render: h => h(app)
}).$mount('#app')
