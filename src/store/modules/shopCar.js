import {reqaddShopCar,reqShopCartList} from "../../api"

const state={
    cartList:[]
}

const actions = {
    //                                注意这里的参数接收，只能这样解构
    async reqAddCartSuccess({commit},{skuId,skuNum}){
        const result= await reqaddShopCar(skuId,skuNum);
        if (result.code === 200){
            console.log(result);
            return "ok";
        } else{
            return Promise.reject(new Error('failed'));
        }
    },

    // 请求购物车中的内容
    async reqCarList({commit}){
        const result = await reqShopCartList();
        if (result.code === 200){
            commit('RECEIVE_CARLIST',result.data);
        }
    }
}

const mutations = {
    RECEIVE_CARLIST(state,cartList){
        state.cartList = cartList;
    }
}

const getters = {

}

export default {
    namespaced:'true',
    state,
    actions,
    mutations,
    getters
}