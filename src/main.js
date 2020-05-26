import Vue from 'vue'
/* axios 3.0 */
// import './plugins/axios'
import Plugin from './plugins/axios'
Vue.use(Plugin);

import App from './App.vue'

Vue.config.productionTip = false

/* 改造开始喽 */
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 引用路由配置文件
import routes from './config/routes'
// 使用配置文件规则
const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
})

// 组件之间数据传递
import Vuex from 'vuex'
Vue.use(Vuex)
import store from './config/vuex/store'

// 2.0 axios 官方推荐API CLI3.0安装之后自动配置，不需要自己重新配置了
/* import axios from 'axios'
Vue.prototype.$http = axios */

/* 3.0 此处router和vuex为安装之后默认添加的代码 */
// import router from './router'
// import store from './store'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
