import {get,post_json, post} from '../http/axios'
import {getToken,removeToken, setToken,} from '../utils/auth'
export default{
    namespaced:true,
    state:{
        userinfo:{},
        token:getToken(),
    },
    mutations:{
        refreshUser(state,userinfo){
            state.userinfo=userinfo;
        },
        refreshToken(state,token){
            state.token=token;
        }
    },
    actions:{
        async login(context,data){
            let res=await post_json('/user/login',data);
            let token=res.data.token;
            //将token设置到状态机
            setToken(token)
            context.commit('refreshToken',token);
           await context.dispatch('getUserInfo',token); //分发
        },
        //通过token获取用户基本信息
        async getUserInfo(context,token){
            let res=await get('/user/info',{token});
            context.commit('refreshUser',res.data);
        },
        //退出登陆
        async logout(context){
            let res=await post('/user/logout');
            1.//删除本地缓存中的token
            removeToken();
            2.//删除状态机中的userinfo和 token
            context.commit('refreshUser',"");
            context.commit('refreshToken','');
            return res;

        }
    }
}