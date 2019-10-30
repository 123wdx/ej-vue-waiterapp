<template>
    <div id="home">
     <div class="hander">
            <div class="log">
            <span>家政服务平台-员工</span>
        </div>
     </div>
      <div class="conent">
         <van-cell-group>
            <van-field
                v-model="form.username"
                required
                clearable
                label="用户名"
                right-icon="question-o"
                placeholder="请输入用户名"
                @click-right-icon="$toast('question')"
            />
            <van-field
                v-model="form.password"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
            />
        </van-cell-group>
        <div class="login-submit">
        <van-button size="default" round style="width:30%" @click="submitHandler" type="info">登录</van-button>
        </div>
      </div>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return{
            form:{
                type:'waiter'
            }
        }
    },
    methods:{
       ...mapActions('user',['login']),
       submitHandler(){
           this.login(this.form)
           .then(()=>{
                this.$router.push('/home');
           })
        }
    }
}
</script>
<style  scoped>
.log{
    height: 150px;
    background-color:#1989fa;
    color: aliceblue;
    font-size: 30px;
    font-family: '宋体';
    font-weight: bolder;
    text-align: center;
    line-height: 6rem;
}
.hander{
    margin-bottom: 100px;
}
.login-submit{
    margin-left: 180px;
    margin-top:30px;
}
</style>