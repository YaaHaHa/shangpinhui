/* 
  本文件作vuex数据共享
  模块化数据

*/

import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import userInfo from './modules/userInfo'
import search from './modules/search'
import detail from './modules/detail'
import shopCar from './modules/shopCar'

Vue.use(Vuex);

/*     const state ={
        xxx:''
    }
    const mutations={
        RECEIVE_CATEGORY_LIST(state,value){
            state.xxx = value;
        }
    }
    const actions={
        getCategoryList({commit},value){
            commit('RECEIVE_CATEGORY_LIST',value)
        }
    }
    const getters={
        
    }  */

export default new Vuex.Store({
/*     state,
    mutations,
    actions,
    getters, */
    modules:{
        home,
        userInfo,
        search,
        detail,
        shopCar,
    }
})
