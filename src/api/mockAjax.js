/* 

    此文件作为二次封装的axios处理mock模拟数据
*/

import axios from "axios";
import NProgress from "nprogress";

const service = axios.create({
    baseURL:'/mock',
    timeout:20000
})

service.interceptors.request.use((config)=>{
    NProgress.start();
    return config;
})

service.interceptors.response.use(
    response =>{
        NProgress.done();
        return response.data;
    },
    error =>{
        NProgress.done();
        return Promise.reject(error)
    }
)

export default service;