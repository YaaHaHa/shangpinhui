import {reqDetailInfo} from '../../api'

const state ={
    detailInfo : {},
}



const mutations = {
    RECEIVE_DETAILINFO(state,detailInfo){
        state.detailInfo = detailInfo
    }
}

// 获取商品详情数据
const actions ={
    async reqdetailInfo({commit},skuId){
        const result = await reqDetailInfo(skuId);
        if (result.code === 200){
            const detailInfo = result.data;
            commit('RECEIVE_DETAILINFO',detailInfo)
        }
    }
}

const getters ={
    categoryView(state){
        return state.detailInfo.categoryView || {}
    },

    spuSaleAttrList(state){
        return state.detailInfo.spuSaleAttrList || []
    },

    skuInfo(state){
        return state.detailInfo.skuInfo || {}
    }
}

export default {
    namespaced :true,
    state,
    mutations,
    actions,
    getters
}