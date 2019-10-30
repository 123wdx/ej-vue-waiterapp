<template>
    <div id="order">
        <van-nav-bar title="订单" style="background-color:#ece6e6"/>
        <van-tabs v-model="active">
            <van-tab title="所有订单">
                <!-- <briup-order-pane
                :data='orders'
                @accept='accephandel'
                @reject='completeHandel'
                @complete='completeHandel'>
                </briup-order-pane> -->
            </van-tab>
            <van-tab title="未接订单">内容 2</van-tab>
            <van-tab title="已接订单">内容 3</van-tab>
            <van-tab title="待确认">内容 4</van-tab>
            <van-tab title="完成订单">内容5</van-tab>
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
                this.$$toast(response.statusText)
            })
        },
        completeHandel(orderId){
            this.rejectOrder(orderId)
            .then((response)=>{
                this.$$toast(response.statusText)
            })
        },
    },

    }

</script>
<style  scoped>
    
</style>