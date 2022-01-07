import {getUserTempId, getToken} from '../../utils/userabout'
import {reqRegister, reqLogin, reqUserInfo} from '../../api'

export default {
    // 开启命名空间
    namespaced:true,
    state:{
        // 用户的临时标识
        userTempId:getUserTempId(),
        token:getToken(),
        userInfo:''

    },
    mutations:{
        // 保存服务器给的token
        RECEIVE_TOKEN(state,userInfo){
            state.token = userInfo.token;
        },

        // 保存用户的信息
    },
    actions:{
        // 登录
        /* 
            登录成功以后根据返回的响应体决定下一步，这里只是定义，在组件中被dispatch时被拿去执行
                返回体中含有token，保存给state中，因为默认登录时要用上
        
        */
        async reqlogin ({commit},userInfo){
            const result = await  reqLogin(userInfo);
            commit('RECEIVE_TOKEN',userInfo);
            if (result.code === 200){
                localStorage.setItem('TOKEN',result.data.token)
                return "ok"
            } else {
                return Promise.reject(new Error(`登录失败${result.message}`))
            }
        },


        // 注册
        async reqregister({commit},userInfo){
            const result = await reqRegister(userInfo);
            console.log(result);
            if (result.code === 200){
                return 'ok';
            } else {
                return Promise.reject(new Error(`注册失败${result.message}`));
            }
        },

        // 获取用户数据
        async requserinfo (){
            const result = await reqUserInfo();
            if (result.code === 200){
                return 'ok'
            }
        }
    },
    getters:{
        
    }
}