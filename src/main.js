import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import HelloWorld from './components/HelloWorld.vue'
import Others from './components/Others.vue'

const routes = [
  { path: '/HelloWorld', component: HelloWorld },
  { path: '/Others', component: Others }
]
const router = new VueRouter({
  routes
})

Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
