import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueDraggableResizable from 'vue-draggable-resizable'
import vSelect from 'vue-select'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'


Vue.component('vue-draggable-resizable', VueDraggableResizable)
Vue.component('v-select', vSelect)
Vue.component('icon', Icon)

new Vue({
  el: '#app',
  render: h => h(App)
})
