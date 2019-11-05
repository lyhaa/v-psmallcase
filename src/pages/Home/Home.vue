<template>
  <div class="Home">
    <div class="head">
      <van-nav-bar>
        <slot slot="title" name="title">
          <!-- 点击进搜索页 -->
          <van-search placeholder="请输入搜索关键词" v-model="value" disabled @click="$router.history.push('/search')" />
        </slot>
        <div slot="right">
          <van-icon name="contact" color="#ccc" size="1.346004rem" />
        </div>
        <div class="logo" slot="left">
          <img
            data-v-0677858e
            width="100%"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ2OUE2MkU0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ2OUE2MkY0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOUQ0QkM2RjREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOUQ0QkM3MDREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiL8gcIAAAF1SURBVHja7Ju/LwRRFEbf+FVsQ0dBdJKNSksUSqVCr6AhKxGVwn+gVUpQEI1So5XoZUOhEbKMDiESIeOTzPbvzpoxz5wvOd3duzsn++7cSXajZMU9OOeGXPmTiHtxIU7FoYh/oe+ZmPKsjSMJS1yY+RS7YrNDcTdi1Le4y4WbHrEorsRcUW8asrB2BsSxWEeYLVtiCWG2bIsJhPmnV+zkeV3/TZhLv2HzCLNlFWG2TIqRvHYZa97FR84XXEvnUSeZEft/LexZDIvXnIVFop6uCQ3RnaHHeBmO5FMBstrPjZdiTUyLlww9Bqs6w87FcobX9Vd56B+IZoZjXVlhP0f0qAwfJKS1ookw+w0HYaEFYQVs+j4ZE7Oed6o3sVfA00OphW2IBUN9S5xU+Uhad6A+ZhhDnyAMYQhDGMIQRhCGMIQhDGEEYQhDGMIQhjCCMIQhDGEIIwhDWFHCLP81vPOsezT0/BK3nj0tP1i59qxrGXrG3wIMAK5yNsqRAjAyAAAAAElFTkSuQmCC"
          />
        </div>
      </van-nav-bar>
      <div class="nav-wrap">
        <div class="nav_1" v-show="nav_isok">
          <div class="nav_left">
            <nav>
              <li v-for="(item,index) in nav_data" :key="index" @click="nl_clk(index)">
                <span :class="{'s_tag':n_index == index}">{{item.name}}</span>
              </li>
            </nav>
          </div>
          <div class="nav_rigth" style="float: right">
            <van-icon name="arrow-down" @click="nav_cik" />
          </div>
        </div>
        <transition name="slide-fade">
          <div class="nav_2" v-show="!nav_isok">
            <div class="n2_top">
              <span>全部</span>
              <span>
                <van-icon name="arrow-up" @click="nav_cik" />
              </span>
            </div>
            <div class="btn-wrap">
              <span
                v-for="(item,index) in nav_data"
                :class="['extra-btn',{'bt_tag':n_index == index}]"
                :key="index"
                @click="nl_clk(index,'isok')"
              >{{item.name}}</span>
            </div>
          </div>
        </transition>
        <div class="nav_mask" v-if="!nav_isok" @click="nl_clk('','isok')"></div>
      </div>
    </div>
    <transition name="bounce">
      <keep-alive>
        <component :is="nav_name"></component>
      </keep-alive>
    </transition>
    <div class="h_t" @click="ht_click" v-show="ht_isok">
      <img width="100%" :src="require('../../assets/top.451d650ecd.png')" alt />
    </div>
    <van-loading size="24px" vertical style="margin-top:1.865011rem;" v-if="body_isok">加载中...</van-loading>
  </div>
</template>
<script>
import V_home from "../../Piecemodule/V_home.vue";
import Appliance from "../../Piecemodule/Appliance.vue";
import Brainpower from "../../Piecemodule/Brainpower.vue";
import Lifearound from "../../Piecemodule/Lifearound.vue";
import Notebook from "../../Piecemodule/Notebook.vue";
import Phone from "../../Piecemodule/Phone.vue";
import Tv from "../../Piecemodule/Tv.vue";
import {bus} from "../../bus.js";
export default {
  data() {
    return {
      name: "Home",
      value: "",
      mask_isok: false,
      nav_isok: true,
      nav_data: [
        { name: "推荐" ,componen:"V_home"},
        { name: "手机",componen:"Phone" },
        { name: "智能",componen:"Brainpower" },
        { name: "电视",componen:"Tv" },
        { name: "笔记本",componen:"Notebook" },
        { name: "家电",componen:"Appliance" },
        { name: "生活周边",componen:"Lifearound" }
      ],
      n_index: 0,
      nav_name: "V_home",
      body_isok: true,
      ht_isok: false
    };
  },
  computed: {
    //读取vuex的数据
    getdata() {
      return this.$store.getters.getdata;
    }
  },
  watch: {
    //判断有没有数据
    getdata(val) {
      if (val) {
        this.body_isok = false;
      }
    }
  },
  methods: {
    //显示对应的导航
    nav_cik() {
      this.nav_isok = !this.nav_isok;
    },
    //切换导航
    nl_clk(idx, isok) {
      this.n_index = idx;
      if (isok) {
        this.nav_cik();
      }
      if(typeof idx == 'number'){
        this.nav_name = this.nav_data[idx].componen 
      }else{
        return;
      }
    },
    //返回顶部
    ht_click() {
      document.documentElement.scrollTop = 0;
    },
    getScrollPosition: function() {
      // 滚动条距顶部距离
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 滚动条距左端距离
      if (top > 300) {
        this.ht_isok = true;
      } else {
        this.ht_isok = false;
      }
    }
  },
  mounted() {
    //监听滚动条
    window.addEventListener("scroll", this.getScrollPosition, false);
  //通知头部隐藏
        bus.$emit('headjt',{isok:false,title:"首页"});
  },
  destroyed() {
    //离开页面关闭监听滚动条
    window.removeEventListener("scroll", this.getScrollPosition, false);
  },
  components: {
    V_home,
    Lifearound,
    Appliance,
    Brainpower,
    Notebook,
    Phone,
    Tv
  },
  activated(){
    //keep-alive激活时触发
    bus.$emit('headjt',{isok:false,title:"首页"});
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
.bounce-enter-active {
  animation: slideInLeft.5s;
}
@-webkit-keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.slideInLeft {
  -webkit-animation-name: slideInLeft;
  animation-name: slideInLeft;
}


.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.Home {
  #clearfix();
  margin-top: 4.156309rem;
  margin-bottom: 2.664301rem;
  .h_t {
    position: fixed;
    bottom: 3.250447rem;
    right: 0.53286rem;
    width: 2.131441rem;
    z-index: 200;
  }
  .head {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 200;
    #clearfix();
    .van-nav-bar--fixed {
      position: sticky;
      padding-bottom: 0.159858rem;
    }
    .nav-wrap {
      .nav_mask {
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 999;
        position: fixed;
        width: 100%;
        height: 100%;
      }
      #clearfix();
      background-color: #fff;
      .nav_1 {
        #clearfix();
        .nav_left {
          overflow: auto;
          float: left;
          width: 85%;
          nav {
            white-space: nowrap;
            overflow-y: hidden;
            overflow-x: auto;
            line-height: 1.438722rem;
            &::-webkit-scrollbar {
              height: 0;
              background: transparent;
            }
            li {
              list-style: none;
              display: inline-block;
              padding: 0 0.692718rem;
              font-size: 0.692718rem;
              span {
                display: block;
                border-bottom: 2px solid rgba(237, 91, 0, 0);
              }
              .s_tag {
                color: rgb(237, 91, 0);
                border-color: rgb(237, 91, 0);
              }
            }
          }
        }
        .nav_rigth {
          line-height: 1.492008rem;
          .van-icon {
            margin-right: 0.692718rem;
            &::before {
              color: #cccccc;
              font-size: 0.852576rem;
            }
          }
        }
      }
      .nav_2 {
        padding: 0 0.746004rem;
        .btn-wrap {
          display: flex;
          flex-wrap: wrap;
          margin-top: 0.79929rem;
          .extra-btn {
            border: 1px solid #e5e5e5;
            box-sizing: border-box;
            background-color: #f2f2f2;
            width: 4.262881rem;
            height: 1.59858rem;
            display: inline-block;
            font-size: 0.692718rem;
            text-align: center;
            border-radius: 0.213144rem;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 0.426288rem;
            margin-bottom: 0.53286rem;
            &:nth-child(4) {
              margin-right: 0;
            }
          }
          .bt_tag {
            background-color: #fde0d5;
            border-color: #ff6700;
            color: #ff6700;
          }
        }
        #clearfix();
        .n2_top {
          #clearfix();
          padding-top: 0.639432rem;
          span:nth-child(1) {
            font-size: 0.746004rem;
            font-weight: 500;
          }
          span:nth-child(2) {
            float: right;
          }
          .van-icon {
            // margin-right: 0.692718rem;
            &::before {
              color: #cccccc;
              font-size: 0.852576rem;
            }
          }
        }
      }
    }
    .van-cell /deep/ .van-field__left-icon .van-icon {
      color: #969799;
    }
    .van-search__content  .van-cell__value  .van-field__body /deep/ .van-field__control{
      line-height: 0;
    }
    .van-search {
      padding: 0.319716rem 0 0 0;
    }
    .van-nav-bar__title {
      max-width: 75%;
    }
    .logo {
      width: 1.172292rem;
    }
  }
}
</style>