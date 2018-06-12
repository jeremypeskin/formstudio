import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueDraggableResizable from 'vue-draggable-resizable'

Vue.component('vue-draggable-resizable', VueDraggableResizable)

new Vue({
  el: '#app',
  render: h => h(App)
})
