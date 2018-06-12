import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueDraggableResizable from 'vue-draggable-resizable'
import vSelect from 'vue-select'

Vue.component('vue-draggable-resizable', VueDraggableResizable)
Vue.component('v-select', vSelect)

new Vue({
  el: '#app',
  render: h => h(App)
})
