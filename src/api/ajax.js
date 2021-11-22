import axios from 'axios'
import NProgress from 'nprogress'

const service = axios.create({
    // baseURL:'localhost:8000/api',  基础路径
    baseURL:'/api',     //基础路径，以为本省就是在8000下的，直接去找api得了，不用带local....
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

export default service;