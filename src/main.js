import Vue from 'vue'
import App from './App.vue'

// 引入全局组件TypeNav
import TypeNav from './components/TypeNav'
import Pagination from './components/Pagination'

// 引入路由模块
import router from './router'
Vue.config.productionTip = false

// 引入vuex数据管理模块
import store from './store'


// 引入按钮HintButton组件
import HintButton from './components/HintButton'
Vue.component(HintButton.name,HintButton)

import './pluins/swiper'    //加载swiper配置  
import './pluins/element-ui'  // 按需引入Element-ui
import './pluins/validate'  // 引入表单验证组件
import './mocks/mockServer' //加载mock,也就是说拉过来执行一下

import VueLazyload from 'vue-lazyload'
import loading from './assets/images/lazyloading.gif'
// 在图片界面没有进入到可视范围前不加载, 在没有得到图片前先显示loading图片
Vue.use(VueLazyload,{   // 内部自定义了一个指令lazy
  loading               // 指定未加载得到图片之前的loading图片
})





// 测试api
import * as API from './api'    //篡成一个对象，因为他是一个一个分别暴露的


// 注册全局组件TypeNav
Vue.component(TypeNav.name,TypeNav);
Vue.component(Pagination.name,Pagination)
new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this;  //创建全局事件总线
    Vue.prototype.$api = API;   //当不适用vuex的时候，可以把接口请求函数全部装在对象当中挂在Vue原型身上
  }
})
