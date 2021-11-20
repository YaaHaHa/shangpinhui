import Vue from 'vue'
import VueRouter from 'vue-router'


// 安装插件
Vue.use(VueRouter)

// 引入路由规则
import routes from './routes'


export default new VueRouter({
    mode:'history',
    routes,
})