/* 
    本文件处理订单页面相关的数据

*/

import {reqTrade} from '../../api'

const state ={
    tradeInfo:{}
}

// 保存订单页面数据
const mutations =  {
    RECEIVE_TRADEINFO(state,tradeInfo){
        state.tradeInfo = tradeInfo;
    }
}


// 发请求获取订单页数据
const actions = {
    async reqtrade({commit}){
        const result = await reqTrade();
        if (result.code === 200){
            commit('RECEIVE_TRADEINFO',result.data)
            return 'ok' 
        }
    }
}

const getters = {

    // 防止数据假报错，如果state.tradeInfo为空，那么userAddressList就是undefined，他还是一个数组
    // 在组件中拿来用时，遍历空数组不报错，但是遍历undefined就有问题了
    userAddressList(state){
        return state.tradeInfo.userAddressList || [];
    },
    detailArrayList(state){
        return state.tradeInfo.detailArrayList || [];
    }
}


export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}