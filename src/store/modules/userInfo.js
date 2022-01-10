import { getUserTempId, setToken, getToken, removeToken } from '../../utils/userabout'
import { reqRegister, reqLogin, reqUserInfo, reqUserOut } from '../../api'

export default {
    // 开启命名空间
    namespaced: true,
    state: {
        // 用户的临时标识
        userTempId: getUserTempId(),
        token: getToken(),       // getToken在页面初次加载时调用一次
        userInfo: ''

    },
    mutations: {
        // 保存服务器给的token
        RECEIVE_TOKEN(state, token) {
            state.token = token;
        },

        // 保存用户的信息   
        RECEIVE_USERINFO(state, userInfo) {
            state.userInfo = userInfo;
        },

        // 清除用户信息
        REMOVE_USERINFO(state) {
            state.token = '';
            state.userInfo = {}

        }
    },
    actions: {
        // 登录
        /* 
            登录成功以后根据返回的响应体决定下一步，这里只是定义，在组件中被dispatch时被拿去执行
                返回体中含有token，保存给state中，因为默认登录时要用上
        
        */
        async reqlogin({ commit }, userInfo) {
            const result = await reqLogin(userInfo);
            // 因为在第一次登录的时候，state中的getToken拿不到
            // 当登录成功时，已经不会再去调用getToken拿token了，要再刷新一下才能继续调用一次getToken
            // 所以，在登录成功后，要主动的存到state中去
            commit('RECEIVE_TOKEN', result.data.token);
            if (result.code === 200) {
                setToken(result.data.token);
                return "ok"
            } else {
                return Promise.reject(new Error(`登录失败`))
            }
        },


        // 注册
        async reqregister({ commit }, userInfo) {
            const result = await reqRegister(userInfo);
            console.log(result);
            if (result.code === 200) {
                return 'ok';
            } else {
                return Promise.reject(new Error(`注册失败${result.message}`));
            }
        },

        // 获取用户数据
        async requserinfo({ commit }) {
            const result = await reqUserInfo();
            if (result.code === 200) {
                commit('RECEIVE_USERINFO', result.data);
                return 'ok';
            } else {
                return Promise.reject(new Error('failed'));
            }
        },

        // 清除用户数据,不用发请求，删除就是了
        requserout({ commit }) {
            removeToken();
            commit('REMOVE_USERINFO');
        },

        // 退出登录，清除token
        async requsrout({ commit }) {
            const result = await reqUserOut();
            if (result.code === 200) {
                removeToken();
                commit('REMOVE_USERINFO');
                return "ok"
            } else {
                return Promise.reject(new Error('failed'));
            }
        }
    },
    getters: {

    }
}