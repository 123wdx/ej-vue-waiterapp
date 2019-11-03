import {get} from '../http/axios'
export default{
    namespaced:true,
    state:{
        orders:[]
    },
    getters:{
        //根据订单状态进行过滤
        orderStatusFilter(state){
            return(status)=>{
                return state.orders.filter(item=>item.status===status)
            }
        }
    },
    mutations:{
        refreshOrders(state,orders){
            state.orders=orders;
        }
    },
    actions:{
        //根据员工ID查找订单信息
        async findWaiterOrders({commit,rootState}){
            let res=await get('/order/query',{waiterId:rootState.user.userinfo.id});
            commit('refreshOrders',res.data);
        },
        //接单
        async accepOrder(context,orderId){
            let res=await get('/order/takeOrder',{orderId});
            context.dispatch('findWaiterOrders');
            return res;
        },
        //拒绝接单
        async rejectOrder(context,orderId){
            let res=await get('/order/rejectOrder',{orderId});
            context.dispatch('findWaiterOrders');
            return res;
        },
        //完成订单
        async completeOrder(context,orderId){
            let res=await get('/order/serviceCompleteOrder',{orderId});
            context.dispatch('findWaiterOrders');
            return res;
        }
    }
}