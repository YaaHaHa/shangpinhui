import { reqCategoryList, reqCarouselData } from "@/api"

export default {
    // 开启命名空间，才能在组件中dispatch与commit等操作时带上'home/getCategoryList'
    namespaced: true,
    state: {
        categoryList: [],    //分类列表
        homeBannerData:[]  //轮播图数据
    },
    actions: {
        // 发送异步请求获取轮播图数据
        async getCategoryList({ commit }) {
            // 发送异步Ajax请求(调用接口请求函数)
            const result = await reqCategoryList();
            // 如果请求成功了就commit
            if (result.code === 200) {
                const categotylist = result.data;
                commit('RECEIVE_CATEGORY_LIST', categotylist)
            }
        },
        
        // 获取首页轮播图数据
        async getCarouselData({ commit }){
            const result = await reqCarouselData();
            if (result.code === 200){
                const homeBannerData = result.data;
                commit('RECEIVE_HOMEBANNER_DATA',homeBannerData);
            }
        }
    },
    mutations: {
        // 接收保存分类列表
        RECEIVE_CATEGORY_LIST(state, categoryList) {
            state.categoryList = categoryList.splice(0,15);
        },
        // 接收首页轮播图数据
        RECEIVE_HOMEBANNER_DATA(state, homeBannerData) {
            state.homeBannerData = homeBannerData;
        }

    },
    getters: {

    }
}