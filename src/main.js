import Vue from 'vue'
import App from './App.vue'

// 引入全局组件TypeNav
import TypeNav from './components/TypeNav'

// 引入路由模块
import router from './router'
Vue.config.productionTip = false

// 引入vuex数据管理模块
import store from './store'

// 引入swiper的样式
import 'swiper/css/swiper.css'

// 注册全局组件TypeNav
Vue.component(TypeNav.name,TypeNav);
new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store
})
