<template>
    <div id="home">
        <van-row class="log">
            <img src="../../assets/1.jpg" alt="图片挂了" style="width:100%;height:200px">
        </van-row>
        <van-row>
            <van-panel :title="o.customer.realname" :status='o.status' v-for="o in orderStatusFilter('待接单')" :key='o.id'>
                <van-row>
                    <van-col :span="4" style="text-align:center;line-height:2em;color:red;"><van-icon name="gem-o"/></van-col>
                    <van-col :span="20">总额：{{o.total}}</van-col>
                </van-row>
                 <van-row>
                    <van-col :span="4" style="text-align:center;line-height:2em; color:red;"><van-icon name="clock-o"/></van-col>
                    <van-col :span="20">下单时间：{{o.orderTime}}</van-col>
                </van-row>
                  <van-row>
                    <van-col :span="4" style="text-align:center;line-height:2em;color:red;"><van-icon name="label-o"/></van-col>
                    <van-col :span="20">服务内容：</van-col>
                </van-row>
                 <van-row>
                    <van-col :span="4" style="text-align:center;line-height:2em;color:red;"><van-icon name="location-o"/></van-col>
                    <van-col :span="20">地址：{{o.address.province+""+o.address.city+""+o.address.area}}</van-col>
                </van-row>
                <div slot="footer" style="text-align:center;margin-top:40px;">
                <van-button size="small" type="danger" @click.prevent="rejectHandel(o.id)">拒绝</van-button>&nbsp;
                <van-button size="small" type="primary" @click.prevent='accephandel(o.id)' >接受</van-button> 
                </div>
            </van-panel>
        </van-row>
    </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
    data(){
        return{

        }
    },
    created(){
        this.findWaiterOrders();
    },
    computed:{
        ...mapState('order',['orders']),
        ...mapGetters('order',['orderStatusFilter'])
    },
    methods:{
        ...mapActions('order',['findWaiterOrders','accepOrder','rejectOrder']),
        accephandel(orderId){
            this.accepOrder(orderId)
            .then((response)=>{
                this.$toast(response.statusText)
            })
        },
        rejectHandel(orderId){
            this.rejectOrder(orderId)
            .then((response)=>{
                this.$toast(response.statusText)
            })
        }
        
    }
}
</script>
<style  scoped>
.log{
    margin-bottom: 20px;
}
</style>