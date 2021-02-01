import Vue from 'vue'
import App from './App.vue'
import { Button, Field, Select, Input, Navbar, Checkbox } from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Field)
Vue.use(Select)
Vue.use(Input)
Vue.use(Navbar)
Vue.use(Checkbox)
// Vue.use(NavbarItem)

new Vue({
  render: h => h(App),
}).$mount('#app')
