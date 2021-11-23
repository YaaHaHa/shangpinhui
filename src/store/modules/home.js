import { reqCategoryList } from "@/api"

export default {
    // 开启命名空间，才能在组件中dispatch与commit等操作时带上'home/getCategoryList'
    namespaced: true,
    state: {
        categoryList: '',    //列表
    },
    actions: {
        async getCategoryList({ commit }) {
            // 发送异步Ajax请求(调用接口请求函数)
            const result = await reqCategoryList();
            // 如果请求成功了就commit
            if (result.code === 200) {
                const categotylist = result.data;
                commit('RECEIVE_CATEGORY_LIST', categotylist)
            }

        }
    },
    mutations: {
        // 接收保存分类列表
        RECEIVE_CATEGORY_LIST(state, categoryList) {
            state.categoryList = categoryList.splice(0,15);
        }
    },
    getters: {

    }
}