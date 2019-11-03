<template>
    <div id="layout">
       <router-view/>
        <van-tabbar v-model="active" @change='tabChanghander'>
            <van-tabbar-item icon="home-o" name='/home'>首页</van-tabbar-item>
            <van-tabbar-item icon="coupon-o" name='/order'>订单</van-tabbar-item>
            <van-tabbar-item icon="friends-o" name='/user'>我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
import { mapActions,mapState } from 'vuex';
export default {
    data(){
        return{
            active:0
        }
    },
    created(){
        //通过token获取用户信息
       
    },
    computed:{
        ...mapState('user',['userinfo'])
    },
    methods:{
     
        tabChanghander(path){
            this.$router.push({path});
        }
    },

}
</script>