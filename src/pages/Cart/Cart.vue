<template>
  <div class="Cart">
    <!-- <van-nav-bar left-text="返回" left-arrow> -->
      <!-- <van-icon name="search" slot="right" /> -->
      <!-- <slot slot="right">
        <span style="font-size: .639432rem;">去登录</span>
        <van-icon name="arrow" size=".806572rem" color="rgba(0,0,0,.54)" />
      </slot>
      <slot slot="left">登录后享受更多优惠</slot>
    </van-nav-bar> -->
    <div v-if="cartisok" class="noitems">
      <router-link to="/">
        <span>购物车还是空的</span>
        <em>去逛逛</em>
      </router-link>
    </div>
    <div class="cartlist" v-if="cartlist">
      <ul>
        <li class="item" v-for="(item,index) in cartlist" :key="index">
          <div class="u_flex">
            <div class="chebox">
              <van-checkbox :name="index" checked-color="darkblue" v-model="item.checkisok"
               :change="totalPrice" @click="updatechbox(item.goodsid)" ></van-checkbox>
            </div>
            <a href="javascript:;" class="imgProduct">
              <img :src="item.img_url" alt />
            </a>
            <div class="info">
              <div class="item-text">
                <p class="name">{{item.title}}</p>
              </div>
              <div class="price-without">
                <span>售价：</span>
                <span>{{item.prices}}元</span>
              </div>
              <div class="num">
                <div class="input-number">
                  <div class="van-stepper van-sku__stepper">
                    <!-- van-stepper__minus--disabled -->
                    <button :class="['van-stepper__minus',{
                      'van-stepper__minus--disabled':item.amount<=1?true:false
                    }]" @click="addsubtract({snode:item,flag:!1})"></button>
                    <input
                      type="number"
                      role="spinbutton"
                      aria-valuemax="15"
                      aria-valuemin="1"
                      aria-valuenow="1"
                      disabled="disabled"
                      class="van-stepper__input"
                      :value="item.amount"
                    />
                    <button class="van-stepper__plus" @click="addsubtract({snode:item,flag:!0})"></button>
                  </div>
                </div>
                <div class="delete" @click="Singledelete(item.goodsid)">
                  <van-icon name="delete" size="1.33215rem" />
                </div>
              </div>
            </div>
          </div>
          <div data-v-5c6b2c62 class="ui-line"></div>
        </li>
      </ul>
      <!-- <van-button type="primary">全计{{totalMoney}}</van-button>   -->
      <div class="point" v-show="cartlist.length>0?!0:!3" >
        <p>温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</p>
      </div>
    </div>
    <van-loading type="spinner" vertical v-if="!data" />
    <div v-if="data">
      <div class="recommend-top-img">
        <img width="100%" :src="data[0].headers.body.items[0].img_url" alt />
      </div>
      <div class="goods-item">
        <a href="javascript:;" v-for="(item,index) in data[0].recom_list" :key="index">
          <div class="goods-img-box">
            <img v-lazy="item.image_url" alt />
          </div>
          <div class="goods-info">
            <p class="goods-name no-wrap">{{item.name}}</p>
            <p class="goods-price price">￥{{item.price}}</p>
          </div>
        </a>
      </div>
    </div>
    <div class="bottom-submit" v-show="buynavisok">
      <div class="box-flex">
          <div class="price-box">
            <div class="price_num">共{{this.vals?this.vals.b:0}}件金额：</div>
            <div class="price">
              <strong>{{this.vals?this.vals.a:0}}</strong>
              <span>元</span>
            </div>
          </div>
        <a href="javascript:;" class="disable" @click="$router.push('/')" >继续购物</a>
        <a href="javascript:;" class="btnss">去结算</a>
      </div>
    </div>
    <!-- {{cartlist}} -->
  </div>
</template>
<script>
import { bus } from "../../bus.js";
import {mapActions,mapGetters} from 'vuex';
export default {
  data() {
    return {
      data: "",
      cartisok: false,
      cartlist:"",
      buynavisok:false,
      vals:{}
    };
  },
  created() {
    this.getcartdata();
    (async () => {
      this.data = await this.$http.get("/guess");
    })();
  },
  methods: {
    ...mapActions(["addsubtract","Singledelete","getcartdata","updatechbox"]),
    ...mapGetters(["totalPrice","getcarlist"]),
  },
  watch: {
    cartlist(val) {
      if (val.length > 0) {
        bus.$emit("tabjt", false);
        this.buynavisok = true;
      } else {
        bus.$emit("tabjt", true);
        this.buynavisok = false;
      }
     },
     getcarlistt(data){
       this.cartlist = data;
     },
     totalPrices(vals){
       this.vals = vals;
     }
  },
  computed:{
    getcarlistt(){
      return this.getcarlist();
    },
    totalPrices(){
      return this.totalPrice();
      // console.log(val);
    }
  },
  mounted() {
    //第一次时通知头部
    bus.$emit("headjt", { isok: true, title: "购物车" });
    if (this.cartlist.length > 0) {
      bus.$emit("tabjt", false);
      this.buynavisok = true;
    } else {
      bus.$emit("tabjt", true);
      this.buynavisok = false;
    }
  },
  deactivated() {
    bus.$emit("tabjt", true);
  },
  activated() {
    //keep-alive激活时通知
    bus.$emit("headjt", { isok: true, title: "购物车" });
    if (this.cartlist.length > 0) {
      bus.$emit("tabjt", false);
      this.buynavisok = true;
    } else {
      bus.$emit("tabjt", true);
      this.buynavisok = false;
    }
  }
};
</script>
<style lang="less" scoped>
#clearfix() {
  &::after {
    content: ".";
    clear: both;
    display: block;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
}
.Cart {
  padding-top: 2.451157rem;
  padding-bottom: 2.664301rem;
  .cartlist {
    ul {
      .item {
        .u_flex {
          padding: 13px 0;
          display: flex;
          align-items: center;
          .chebox {
            margin-left: 0.53286rem;
          }
          .imgProduct {
            display: inline-block;
            width: 7.902313rem;
            border: 1px solid #eee;
            margin-left: 0.319716rem;
            margin-right: 0.959148rem;
            img {
              width: 100%;
            }
          }
          .num {
            #clearfix();
            .input-number {
              float: left;
              #clearfix();
            }
            .delete {
              float: right;
              // width: 1.33215rem;
              margin-right: 0.53286rem;
            }
          }
          .info {
            width: 100%;
            .item-text {
              margin-right: 0.639432rem;
              margin-bottom: 0.426288rem;
              .name {
                width: 10.657203rem;
                font-size: 0.746004rem;
                line-height: 1.06572rem;
                color: #666;
                display: inline-block;
              }
            }
          }
          .price-without {
            color: #999;
            font-size: 0.639432rem;
            margin-bottom: 0.53286rem;
            span {
              margin-right: 0.53286rem;
            }
          }
        }
        .ui-line {
          height: 0.79929rem;
          background: #f5f5f5;
        }
      }
    }
    .point {
      p {
        color: #999;
        font-size: 0.639432rem;
        text-align: left;
        padding: 0.53286rem 0.959148rem;
      }
    }
  }
  .van-nav-bar {
    color: rgba(0, 0, 0, 0.54);
    height: 3.197161rem;
    line-height: 3.197161rem;
    .van-nav-bar__left {
      font-size: 0.852576rem;
      color: rgba(0, 0, 0, 0.87);
    }
  }
  .noitems {
    background-color: #ebebeb;
    padding: 0.53286rem;
    text-align: center;
    span {
      display: inline-block;
      color: rgba(0, 0, 0, 0.27);
      font-size: 0.639432rem;
      line-height: 2.397871rem;
      padding-right: 0.373002rem;
      padding-left: 2.930731rem;
      background-image: url("../../assets/cartnull.daaf7926f8.png");
      background-size: contain;
      background-repeat: no-repeat;
    }
    em {
      display: inline-block;
      color: rgba(0, 0, 0, 0.87);
      border: 1px solid rgba(0, 0, 0, 0.15);
      box-sizing: border-box;
      font-size: 0.692718rem;
      padding: 0.319716rem;
    }
  }
  .goods-item {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 2.664301rem;
    a {
      display: block;
      width: 49.5%;
      img {
        width: 100%;
      }
    }
    .goods-info {
      padding: 0.639432rem;
      color: #3c3c3c;
      .goods-name {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.692718rem;
        white-space: nowrap;
      }
      .goods-price {
        color: #ff6700;
        font-size: 0.852576rem;
        margin-top: 0.26643rem;
      }
    }
  }
  .bottom-submit {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
    z-index: 99;
    box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    .box-flex {
      display: flex;
      align-items: center;
      text-align: center;
      .price-box {
        flex: 1;
        .price_num {
          color: #999;
          font-size: 0.692718rem;
        }
        .price {
          margin-top: 0.26643rem;
          strong {
            color: #ff5722;
            font-weight: bolder;
            font-family: unset;
            font-size: 1.06572rem;
            margin-right: 0.213144rem;
          }
          span {
            color: #999;
            font-size: 0.692718rem;
          }
        }
      }
      .disable {
        flex: 1;
        display: block;
        line-height: 2.770873rem;
        background: #f4f4f4;
    border: 1px solid #f4f4f4;
    color: #333;
    font-size: .746004rem;
      }
      .btnss {
        flex: 1;
        display: block;
        line-height: 2.770873rem;
        background: #ff6700;
        border: 1px solid  #ff6700;
    color: #fff;
    font-size: .746004rem;
      }
    }
  }
  .van-stepper__minus::before, .van-stepper__plus::before{
        width: .692718rem;
    height: .083286rem;
  }
  .van-stepper__minus::after, .van-stepper__plus::after{
        width: .083286rem;
    height: .692718rem;
  }
  .van-stepper__input{
    color: #323233; 
  }
}
</style>