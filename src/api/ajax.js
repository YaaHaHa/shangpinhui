import axios from 'axios'
import NProgress from 'nprogress'


import store from '../store'
/* const service = axios.create({
    // baseURL:'http://localhost:8080/api',  基础路径
    baseURL:'/api',     //基础路径，以为本省就是在8000下的，直接去找api得了，不用带local....。而且到底开哪个端口也不一定，不用写死。
    timeout:20000       //超时时间
})

// 请求拦截器
service.interceptors.request.use((config)=>{
  
    // 开启进度条
    NProgress.start();
    return config;
})


// 响应拦截器
service.interceptors.response.use(
    // 请求成功的回调
    response =>{
        NProgress.done();   //隐藏进度条 在响应成功的回调里
        return response.data;
    },
    // 请求失败的回调
    error =>{
        NProgress.done(); //隐藏进度条 在响应失败的回调里
        alert(error.message || '未知错误');

        // 抛出错误
        // throw error
        return Promise.reject(error);  //返回一个失败的Promise，这里如果不是返回一个失败的回调或抛出错误，就会返回一个成功的Promise
    }
)
 */

// 为什么要通过create创建一个？因为发送的请求不止是给一个域名，这样更方便
const service = axios.create({
    baseURL:'/api',
    timeout:20000
})

// 配置请求拦截器
service.interceptors.request.use((config)=>{
    // 必须返回config，不然就发不出去了
    NProgress.start();
    let userTempId = store.state.userInfo.userTempId;
    config.headers.userTempId = userTempId
  return config;
})


// 配置响应拦截器，作用是对请求过来的数据进行提取，对可能出现的错误进行处理
service.interceptors.response.use(
    // 响应成功的回调
    response =>{
        NProgress.done();
        return response.data;
    },
    // 响应失败的回调
    error =>{
        alert(error.message || '未知错误');
        // 抛出错误或返回reject的Promise 
        // throw error;
        NProgress.done();
        return Promise.reject(error);
        /* 
            为什么要这样？非要抛出错误或返回reject
                首先要明了这个抛出的错误或者返回的reject什么时候出现，被谁拿来用？
                    这两个拦截器实际上就是两个.then调用。
                    当axios发送请求后，如果成功响应就执行成功的回调，返回一个Promise.resolve(response.data)。
                    如果失败就执行失败的回调，返回error可以吗？不行啊，以为拦截器是then()，如果不抛出错误或返回reject，那就返回一个成功的resolve
                        响应失败了，还返回一个成功的resolve，这还是一个异步请求数据的，响应拦截器执行后表示一次axios()的执行结果。
                    因为这是链式调用的，实质是.then()的链式。在获取用axios请求拿到的数据时，用async...await直接拿成功的response，如果不报错或返回reject，请求失败的信息也被await拿到了。请求失败在拦截器中处理了更好！
        
        */
    }
)
export default service;