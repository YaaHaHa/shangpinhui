/* 
管理搜索模块的数据
*/
import {
    reqSearch
} from '@/api'

const state = {
    productList: {}, // 搜索出的商品列表相关数据的对象 
}

const mutations = {
    /* 
    接收保存商品列表相关数据对象
    */
    RECEIVE_PRODUCT_LIST(state, productList) {
        state.productList = productList
    }
}

const actions = {

    /* 
    根据指定的搜索条件, 异步获取商品列表的action
    */
    async getProductList({ commit }, searchParams) {
        // 浅拷贝一层，因为要过滤掉空数组与内容为空的属性，这里是地址引用，这里的searchParams与Search组件中的option是一个对象
        searchParams = {...searchParams};
        // 遍历查找有没有属性为空或空数组，有就删除
        Object.keys(searchParams).forEach((key)=>{
          if (searchParams[key] === '' || (Array.isArray(searchParams[key]) && searchParams[key].length === 0)){
            delete searchParams[key];
          }
        })
        // 1. ajax请求, 获取数据
        const result = await reqSearch(searchParams)
        // 2. 如果成功, 提交给mutation
        if (result.code === 200) {
            // const productList = result.data
            commit('RECEIVE_PRODUCT_LIST', result.data)
        }
    }
}
const getters = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}