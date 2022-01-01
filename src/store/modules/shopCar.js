import {reqaddShopCar} from "../../api"

const state={

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
    }
}

const mutations = {

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