import Vue from 'vue'
import VueRouter from 'vue-router'


// 安装插件
Vue.use(VueRouter)

// 引入路由规则
import routes from './routes'


export default new VueRouter({
    mode: 'history',
    routes,
})

// 保存原始的push
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;


// 重写push。因为原始的push中，如果不给回调，那么他就会返回一个Promise，如果跳转到与当前路径一致的目标，就会抛出一个错误的Promise。如果给回调那就执行回调，不会返回任何Promise
VueRouter.prototype.push = function (location, onResolve, onReject) {
    if (onResolve || onReject) {    //判断是否有后两个参数，如果有就按原来的就行
        // originPush(location,onResolve,onReject);    //push是$router调用的，这样使用this就指向了window.这样的话this就出毛病了，push中的this成了window，在严格模式下this就成了undefined报错。不行，this必须是指向$router的
        return originalPush.call(this, location, onResolve, onReject);  //正确this指向
    }
    // 如果没有指定成功或失败的回调，必须用catch处理
    return originalPush.call(this, location).catch((err) => {
        // 如果是重复导航产生的错误，不再向外部传递错误
        if (VueRouter.isNavigationFailure(err)) {
            return err;       //返回一个成功的Promise，值为value
        }
        //   如果是其他原因导致的错误，将错误向下传递
        return Promise.reject(err);
    })

}

VueRouter.prototype.replace = function (location, onResolve, onReject) {
    if (onResolve || onReject) {
      return originalReplace.call(this, location, onResolve, onReject)
    } 
    return originalReplace.call(this, location).catch((err) => {
      if (VueRouter.isNavigationFailure(err)) {
        return err  
      }
      return Promise.reject(err)
    })
  }