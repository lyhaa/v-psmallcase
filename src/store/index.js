import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import {get,post} from '../axios/api.js';
import * as types from './$type.js';
const $http = {get,post};
const store = new Vuex.Store({
    state:{
        h_data:[],
        myName:'',
        goodsList:[],
        checkGoodsLen:true,
        cartlist: [],
        cartCount:0,
        ssiok: true,
        totalMoney: 0,
        commonnum: 0
    },
    getters:{
        getdata(state){
            return state.h_data
        },
        getcarlist(state){
            return state.cartlist
        },
        totalPrice(state){
            state.totalMoney = 0;
            state.commonnum = 0;
            if(state.cartlist){
                state.cartlist.forEach((item)=>{
                    if(item.checkisok){
                        state.totalMoney += (item.prices * item.amount);
                        state.commonnum += parseInt(item.amount);
                    }
                })
                return {a:state.totalMoney,b:state.commonnum};
            }
        }
    },
    mutations:{
        //保存用户名
        [types.UPDAT_EUSER](state,res){
            state.myName = res;
        },
        [types.UPDATE_CARTCOUNT](state){
            let cart = state.cartList;
            // window.console.log(res);
            state.cartCount = cart;
        }
        //存放Home页面的数据
        ,setdata(state,data){
            state.h_data = data
        },
        [types.UPDATE_CARTCOUNT](state, {
            snode,
            flag
        }) {
             if (flag) {
                 snode.amount++;
                 $http.post("/updata", {
                     goodsid:snode.goodsid,
                     amount:snode.amount
                 })
             } else if (!flag) {
                 if (snode.amount > 1) {
                     snode.amount--;
                     $http.post("/updata", {
                         goodsid: snode.goodsid,
                         amount: snode.amount
                     })
                 } else {
                     snode.amount = 1;
                 }
             }
        },
        [types.DEL_CARTLIST](state, goodsid) {
            // window.console.log(goodsid);
            state.cartlist.forEach((item, index) => {
                if (item.goodsid == goodsid) {
                    state.cartlist.splice(index,1);
                    $http.post("/deletes",{goodsid});
                }
            })
        },
        [types.INIT_CARTLIST](state,data){
            state.cartlist = data;
        },
        [types.UPDATE_CHEBOX](state,goodsid){
            state.cartlist.forEach((item) => {
                if (item.goodsid == goodsid) {
                     $http.post("/updata/chebox", {
                         goodsid,
                         checkisok: !item.checkisok
                     })
                }
            })
        }
    },
    actions:{
        //发送请求获取Home页面数据
        async setdata(context){
            let data = await $http.post("/get_home");
            await context.commit("setdata", data);
        },
        //存储用户名
        username({commit},username){
            commit(types.UPDAT_EUSER,username);
        },
        addsubtract({commit},a){
            commit(types.UPDATE_CARTCOUNT,a);
        },  
        Singledelete({commit},index){
            // window.console.log(index);
            commit(types.DEL_CARTLIST,index);
        },
        async getcartdata({commit}){
            let data = await $http.post("/getcartdata");
            await commit(types.INIT_CARTLIST,data);
        },
        updatechbox({commit},data){
            commit(types.UPDATE_CHEBOX,data);
        }
    }
})
export default store;