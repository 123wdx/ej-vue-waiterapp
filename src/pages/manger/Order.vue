<template>
    <div id="order">
        <van-nav-bar title="订单" style="background-color:#ece6e6"/>
        <van-tabs v-model="active">
            <van-tab title="所有订单">
                  <van-panel :title="o.customer.realname" :status="o.status" v-for="o in  orders" :key="o.id">
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
            </van-tab>
            <van-tab title="未接订单">
                   <van-panel :title="o.customer.realname" :status="o.status" v-for="o in  orderStatusFilter('待接单')" :key="o.id">
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
            </van-tab>
            <van-tab title="已接订单">
                      <van-panel :title="o.customer.realname" :status="o.status" v-for="o in  orderStatusFilter('待服务')" :key="o.id">
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
                <van-button size="small" type="primary" @click.prevent='completeHandel(o.id)' >服务完成</van-button> 
                </div>
            </van-panel>
            </van-tab>
            <van-tab title="待确认">
                      <van-panel :title="o.customer.realname" :status="o.status" v-for="o in  orderStatusFilter('待确认')" :key="o.id">
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
            </van-tab>
            <van-tab title="完成订单">      <van-panel :title="o.customer.realname" :status="o.status" v-for="o in  orderStatusFilter('已完成')" :key="o.id">
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
            </van-panel>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
    data(){
        return{
            active:0
        }
    },
    created(){
        this.findWaiterOrders();
    },
    computed:{
        ...mapState('order',['orders']),
        ...mapState('user',['userinfo']),
        ...mapGetters('order',['orderStatusFilter'])
    },
    methods:{
       ...mapActions('order',['findWaiterOrders','accepOrder','rejectOrder','completeOrder']),
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
        },
        completeHandel(orderId){
            this.rejectOrder(orderId)
            .then((response)=>{
                this.$toast(response.statusText)
            })
        },
    },

    }

</script>
<style  scoped>
    
</style>