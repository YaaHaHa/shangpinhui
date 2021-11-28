import { reqCategoryList, reqCarouselData, reqRecommends, reqFloors } from "@/api"

export default {
    // 开启命名空间，才能在组件中dispatch与commit等操作时带上'home/getCategoryList'
    namespaced: true,
    state: {
        categoryList: [],    //分类列表
        homeBannerData: [],  //轮播图数据
        recommendList: [],   //今日推荐数据
        floorsList: []   //楼层数据
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
        async getCarouselData({ commit }) {
            const result = await reqCarouselData();
            if (result.code === 200) {
                const homeBannerData = result.data;
                commit('RECEIVE_HOMEBANNER_DATA', homeBannerData);
            }
        },
        // 获取今日推荐数据
        async getRecommendList({ commit }) {
            const result = await reqRecommends();
            if (result.code === 200) {
                const recommendList = result.data;
                commit('RECEIVE_RECOMMEND_LIST', recommendList);
            }
        },
        // 获取楼层数据
        async getFloorsList({ commit }) {
            const result = await reqFloors();
            if (result.code === 200){
                const floorsList = result.data;
                commit('RECEIVE_FLOORS_LIST',floorsList);
            }
        }
    },
    mutations: {
        // 接收保存分类列表
        RECEIVE_CATEGORY_LIST(state, categoryList) {
            state.categoryList = categoryList.splice(0, 15);
        },
        // 接收首页轮播图数据
        RECEIVE_HOMEBANNER_DATA(state, homeBannerData) {
            state.homeBannerData = homeBannerData;
        },
        // 接收今日推荐的数据
        RECEIVE_RECOMMEND_LIST(state, recommendList){
            state.recommendList = recommendList;
        },
        // 接收楼层的数据
        RECEIVE_FLOORS_LIST(state,floorsList){
            state.floorsList = floorsList;
        }
    },
    getters: {

    }
}