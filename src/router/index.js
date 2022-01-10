import Vue from 'vue'
import VueRouter from 'vue-router'


// 安装插件
Vue.use(VueRouter)

// 引入路由规则
import routes from './routes'

import store from '../store'


const router =  new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
  }
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


router.beforeEach(async (to, from, next) => {
  // 再跳转任何路由前看看有没有token，需不需要有用户相关信息的展示
  let token = store.state.userInfo.token;
  next()
  if (token){
    if (to.path === "/login"){   // 有token，说明之前登录过,直接让他去首页
      next('/');
    } else {      // 如果有token，且要去的不是login，那就要看有没有他的数据
      let isExist = !!store.state.userInfo.userInfo.userName;  // 转成Boolean值
      if (!isExist){      // 如果有token，本地却没有他的数据
        // 尝试获取数据
        try {

          await store.dispatch('userInfo/requserinfo');   // 发给后台看看token有没有过期
          next();
          
        } catch (error) {
          // alert ("用户token过期");
          // 清除本地token，这一个token已经失效，让他去登录
          store.dispatch('userInfo/requserout');
          next('/login?redirect='+to.path);  // 这个跳转会携带参数，给login用。因为进入这个判断代表用户在某一页面要跳转，结果没登录，让他去登录，登录成功后才能接着去想去地方，而不是返回首页
        }
      } else {
        // 有token，而且还有数据，直接放行
        next();
      }
    }
  } else {
    // 如果没有token，只能访问到一部分路由，订单肯定不能访问
    if (to.path === '/trade'){
      next('/login?redirect='+to.path)
    } else {

      next();
    }
  }
})

export default router;