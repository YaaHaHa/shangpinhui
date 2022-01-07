import {requpdateShopCar, reqShopCartList, reqUpdateShopCartState, reqDeleteShopCart} from "../../api"

const state={
    cartList:[]
}

const actions = {
    //                                注意这里的参数接收，只能这样解构
    async reqUpdateCartSuccess({commit},{skuId,skuNum}){
        const result= await requpdateShopCar(skuId,skuNum);
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
    },

    // 改变购物车状态
    async reqUpdateCartState({commit},{skuId,isChecked}){
        const result = await reqUpdateShopCartState(skuId,isChecked);
        if (result.code === 200){
            return 'ok';
        } else {
            return Promise.reject(new Error(`改变购物车${skuId}状态failed`));
        }
    },

    // 全选全不选购物车状态
    async reqUpdateCartStateAll({commit,state,dispatch},isChecked){
        // 批量发送请求，用Promise.all()来处理更合适
        let promises=[];
        state.cartList.forEach((item)=>{
          if (item.isChecked == isChecked) return;
          let promise = dispatch('reqUpdateCartState',{skuId:item.id,isChecked});
          promises.push(promise);
        })
        return Promise.all(promises);
    },

    // 删除购物车
    async reqDeleteshopcart({commit},skuId){
        const result = await reqDeleteShopCart(skuId);
        if (result.code === 200){
            return `删除${skuId}ok`
        } else {
            return Promise.reject(new Error(`删除${skuId}ok失败！`))
        }
    },

    // 删除所有被选中的商品
    async reqDeleteshopcartAll({commit,state,dispatch}){
        // 遍历找到被选中的商品然后批量发送删除请求
        let promises = [];
        state.cartList.forEach((item)=>{
            // 同样的排他思想
            if (item.isChecked != 1) return;
            {
                let promise = dispatch('reqDeleteshopcart',item.id);
                promises.push(promise); 
            }
        })
        return Promise.all(promises);
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