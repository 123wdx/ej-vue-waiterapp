<template>
    <div id="user">
      <van-nav-bar fixed :title="'我的'"  style="background-color:#ece6e6" />
      <div class="context">
      <div class="photo">
        <div class="photo_wrapper">
          <img src="../../assets/timg.jpg" alt="未上传图片">
        </div>
        <div style="text-align:center;line-height:3em" class="user">{{userinfo.name}}</div>
        <div class="line">
         我的收入
        </div>
        <div class="line" >
          我的订单
        </div>
        <div class="line" @click="logoutWaiter">
          退出
        </div>
      </div>
    </div>
    </div>
    
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  computed:{
    ...mapState('user',['userinfo','token'])
  },
  methods:{
    ...mapActions('user',['logout']),
  logoutWaiter(){
    this. logout()
    .then(()=>{
      this.$router.push('/')
    })
  }
  }
}
</script>
<style  scoped>
#user .content {
  padding-top: 46px;
}
.photo {
  padding-top: 2em;
}
.photo .photo_wrapper{
  margin: 0 auto;
  width: 10em;
  height: 10em;
  border-radius: 50%;
  box-sizing: border-box;
  border:1px solid #eedded;
  overflow:hidden;
  margin-top:20px;

  
}
 img {
 width: 100%;
 height: 100%;
  border-radius: 50%;
}
.line{
line-height: 4em;
border-bottom: 1px solid #ededed;
padding-left: 4em;
}
.user{
padding-bottom: 50px;
border-bottom: 3px solid #ededed;
}
</style>