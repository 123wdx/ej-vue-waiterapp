import {get,post_json} from '../http/axios'
export default{
    namespaced:true,
    state:{
        userinfo:{

        }
    },
    mutations:{
        refreshUser(state,userinfo){
            state.userinfo=userinfo;
        }
    },
    actions:{
        async login(context,data){
            let res=await post_json('/user/login',data);
            let token=res.data.token;
            context.dispatch('getUserInfo',token);
        },
        async getUserInfo(context,token){
            let res=await get('/user/info',{token});
            context.commit('refreshUser',res.data);
        }
    }
}