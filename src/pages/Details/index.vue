<template>
  <div id="box">
    <!-- 头部 -->
    <div v-if="this.data">
      <header class="header">
        <div class="fill-height layout align-center">
          <a @click="back" class="header-btn">
            <i class="image-icons header-icon icon-back"></i>
          </a>
          <div class="placeholder"></div>
          <a class="header-btn share-btn">
            <i class="image-icons header-icon icon-share"></i>
          </a>
        </div>
      </header>
      <div class="section section-detail">
        <!-- 轮播图效果 -->
        <van-swipe :autoplay="3000" :height="412.5">
          <van-swipe-item>
            <img v-lazy="this.data[0].img_url" />
          </van-swipe-item>
          <van-swipe-item>
            <img
              v-lazy="'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0f5689a958dde6ae56f680d3f0401ea7.jpg'"
            />
          </van-swipe-item>
          <van-swipe-item>
            <img
              v-lazy="'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a7b299e3805d12fdeea6afc9e5701b91.jpg'"
            />
          </van-swipe-item>
          <van-swipe-item>
            <img
              v-lazy="'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1f81d299fed62eac8da88c58631f801.jpg'"
            />
          </van-swipe-item>
          <van-swipe-item>
            <img
              v-lazy="'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e42dc47f401112be4fe3a186abba182e.jpg'"
            />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 秒杀价格标签 -->
      <div class="section section-detail">
        <div class="product_info_product_name">
          <div class="top-overview ui-flex align-center justify-space-between">
            <div class="top-left fz-m">
              <span class="pretxt">秒杀价</span>
              <div class="price">{{this.data[0].product_price}}</div>
            </div>
            <!---->
            <div class="top-right fz-xs">
              <div class="top-right-time ui-flex align-center justify-end">
                <!---->
                <div class="text">距结束</div>
                <!---->
                <div class="hour wh">12</div>
                <div class="spe">:</div>
                <div class="minut wh">21</div>
                <div class="spe">:</div>
                <div class="second wh">50</div>
              </div>
              <!---->
            </div>
          </div>
          <div class="overview overview-goods-name">
            <div class="goods-name ui-flex align-center justify-start fz-xl">
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea1016a6f8e1d7f91d8b6e4403e9db86.png"
              />
              {{this.data[0].product_name}}
            </div>
          </div>
        </div>
      </div>
      <!-- 商品描述 -->
      <div class="section section-detail">
        <div class="product_info_product_desc">
          <div class="overview overview-goods-brief">
            <div class="goods-brief fz-xs">
              <font
                color="#ff4a00"
              >「3GB+32GB闪降50，到手价749元。预售前3000名付尾款赠18W快充头；付尾款赠470元善诊父母双人体检套餐；付尾款抽奖最高赢65英寸电视」</font>5000mAh大电量 / 最高可选4GB+64GB版本 / 支持18W快充 / Type-C充电接口 / 6.22"水滴全面屏 / 指纹识别+AI人脸解锁 / 骁龙八核处理器 / 超大音量 / 1200万AI双摄 / 支持红外遥控 / 支持无线FM收音机
            </div>
          </div>
        </div>
      </div>
      <!-- 价格标签 -->
      <div class="section section-detail">
        <div class="product_info_product_price">
          <div class="overview product_info_product_price">
            <div class="goods-price layout align-end justify-start">
              <div class="price cur-price">{{this.data[0].product_price}}</div>
              <div class="price origin-price">{{this.data[0].product_org_price}}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 配置信息 -->
      <div class="section section-detail">
        <div class="product_info_class_parameters">
          <div class="classic-param ui-flex align-center justify-start J_linksign-customize">
            <div
              class="classic-param-item"
              data-stat-id="63e0a50dcc8f3caf"
              onclick="_msq.push(['trackEvent', '776b88504049661b-63e0a50dcc8f3caf', '', 'pcpid', '']);"
            >
              <img
                src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f0c04e138bfed2b1ebb589de615236d1.png"
              />
              <div class="classic-param-item-name fz-xs">CPU</div>
              <div class="classic-param-item-value fz-xxs">高通骁龙439</div>
            </div>
            <!---->
            <div
              class="classic-param-item bd-left-1px"
              data-stat-id="6b1a15877e968721"
              onclick="_msq.push(['trackEvent', '776b88504049661b-6b1a15877e968721', '', 'pcpid', '']);"
            >
              <img src="https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png" />
              <div class="classic-param-item-name fz-xs">双摄像头</div>
              <div class="classic-param-item-value fz-xxs">1200万+200万像素</div>
            </div>
            <!---->
            <!---->
            <div
              class="classic-param-item bd-left-1px"
              data-stat-id="a58e4caede93b001"
              onclick="_msq.push(['trackEvent', '776b88504049661b-a58e4caede93b001', '', 'pcpid', '']);"
            >
              <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png" />
              <div class="classic-param-item-name fz-xs">超大屏</div>
              <div class="classic-param-item-value fz-xxs">6.22英寸</div>
            </div>
            <div
              class="classic-param-item bd-left-1px"
              data-stat-id="9e5557f7f9659e1f"
              onclick="_msq.push(['trackEvent', '776b88504049661b-9e5557f7f9659e1f', '', 'pcpid', '']);"
            >
              <img src="https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png" />
              <div class="classic-param-item-name fz-xs">屏幕分辨率</div>
              <div class="classic-param-item-value fz-xxs">1520*720</div>
            </div>
            <div
              class="classic-param-item bd-left-1px"
              data-stat-id="5bee9e73440bc1d1"
              onclick="_msq.push(['trackEvent', '776b88504049661b-5bee9e73440bc1d1', '', 'pcpid', '']);"
            >
              <img src="https://i8.mifile.cn/b2c-mimall-media/c8ec0829241324e401744da627482560.png" />
              <div class="classic-param-item-name fz-xs">流畅</div>
              <div class="classic-param-item-value fz-xxs">3GB</div>
            </div>
            <div
              class="classic-param-item bd-left-1px"
              data-stat-id="b5db427ff7029b73"
              onclick="_msq.push(['trackEvent', '776b88504049661b-b5db427ff7029b73', '', 'pcpid', '']);"
            >
              <img src="https://i8.mifile.cn/b2c-mimall-media/8941adac25333e785b9cc78ca11f4f27.png" />
              <div class="classic-param-item-name fz-xs">存储容量</div>
              <div class="classic-param-item-value fz-xxs">32GB</div>
            </div>

            <div
              class="classic-param-item bd-left-1px"
              data-stat-id="e6c0e8d82413d052"
              onclick="_msq.push(['trackEvent', '776b88504049661b-e6c0e8d82413d052', '', 'pcpid', '']);"
            >
              <img src="https://i8.mifile.cn/b2c-mimall-media/0b4ea0fb21dde2f29df3c20de73539b9.png" />
              <div class="classic-param-item-name fz-xs">超长待机</div>
              <div class="classic-param-item-value fz-xxs">5000mAh</div>
            </div>
            <!---->
            <div
              class="classic-param-item bd-left-1px"
              data-stat-id="ff5cf175e0d216a7"
              onclick="_msq.push(['trackEvent', '776b88504049661b-ff5cf175e0d216a7', '', 'pcpid', '']);"
            >
              <img src="https://i8.mifile.cn/b2c-mimall-media/d1b67a407fb2a1ed42c2c0ce15af3318.png" />
              <div class="classic-param-item-name fz-xs">运营商网络</div>
              <div class="classic-param-item-value fz-xxs">4G全网通</div>
            </div>
            <div
              class="classic-param-item bd-left-1px"
              data-stat-id="cefe1d82892f5bcd"
              onclick="_msq.push(['trackEvent', '776b88504049661b-cefe1d82892f5bcd', '', 'pcpid', '']);"
            >
              <img src="https://i8.mifile.cn/b2c-mimall-media/bfd5ba9ae72c365dee42db14dfae4b0f.png" />
              <div class="classic-param-item-name fz-xs">网络模式</div>
              <div class="classic-param-item-value fz-xxs">双卡双待</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 切换商品 -->
      <div class="section section-detail">
        <div class="product_info_choose_version">
          <div class="border-1px card-box margin-16-32-0">
            <div class="product-section more padding-24-32 border-bottom-1px">
              <div class="ui-flex align-center justify-start J_linksign-customize">
                <div class="title fz-xs" data-stat-id="acfc6b0d193ca133">已选</div>
                <div class="flex fz-xs" data-stat-id="84735e1232778bee">
                  <div class="info">Redmi 8 3GB+32GB 宝石蓝 x 1</div>
                  <!---->
                </div>
              </div>
            </div>
            <div class="product-section more padding-24-32 border-bottom-1px">
              <div class="ui-flex align-center justify-start J_linksign-customize">
                <div class="title fz-xs">送至</div>
                <div class="flex fz-xs">
                  <div class="info">
                    <span class="mr1x">北京市 东城区</span>
                    <span class="on">有现货</span>
                    <!---->
                  </div>
                </div>
              </div>
            </div>
            <div class="product-section more padding-16-32 border-bottom-1px">
              <div
                class="ui-flex align-center justify-start J_linksign-customize service-policy-list"
              >
                <div class="flex service-policy-item" data-stat-id="1f5760c3c41887e9">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAChklEQVR4Ab3YA6zkUBgF4Lu2bdu2bdu2bdu2Ea1t27ZtW7OnyZnkz9s2r+3emSRfJlf/PaNKfW6pnAgB5aAHbIAH4KFnsAv6QxWI5KS23YkpYDp8AI8DSyGnjiBRYR54hF0wCApCKogHcRg2L3SF9SaBkrgNUhLeiGKjuZmyKR70gc+iRn2nQeqLxdsgESiXIsJKUa+f3SAyRH9QmjQXdbsFFqSgmNwGlGYVrL4mOSkMfOWkvqB8pIEIk9gsyAoO7gDlY0u415GAQRJw4DdE9EOQUPCWe+aAfxIOBaVZGCgNwUAJTbjnfmA6dFAEzSGCwQXWLgdKEkfqeEajog9/G6dY+wokNBlfwPEWRmM4Gx01h9jPulchlMWcapyz3GgcZSOrpgDB4agIER6UhSScd9do/GQjvqYQp+2EoMic+0WJH2oMk4lZ4Q6MdhjifGAhKIj3pCiDxDGZWEiMdwVlRXwd1yEkKJteeIN8ZAGr64W6Ikwni4PTEREivMMrvt/eIIdZJBsoC+VFmM4BQpx3E4LicO1r+fftAMpBmMhwju0rTkNQEa7fLv/Lm2wsrC7CvObrJQgByoXRrNHDaERk46etHxnPERZ/Uafus05Gb8d6+WO0oQYs/s8QxbjnLXn2TcvOjxAElB/c4J6VZRDDFg4s90OIkdzrttkVWmzwUF0fhsgj9skjg1hdTxYDpVla+MH6YwK7nRgmwtTUGKIgfGfdWXZvsPqJMBPEccKt4aLeTKe3nB3E4gfQ2MU/qhpcFHWGub0JzwH7RaHnMA3KQVIIC4pCQ2IoAZPgjlh3GorqeCxRHnaKwtILeGoxdhJqa3s+IqSD9rAa7oh/gNdj2AZd5dncjr+ClBUwCf4HjgAAAABJRU5ErkJggg=="
                    class="mr1x img-icon"
                  />
                  <span class="fsc1">小米自营</span>
                </div>
                <div class="flex service-policy-item" data-stat-id="349877e11d55ac49">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAChklEQVR4Ab3YA6zkUBgF4Lu2bdu2bdu2bdu2Ea1t27ZtW7OnyZnkz9s2r+3emSRfJlf/PaNKfW6pnAgB5aAHbIAH4KFnsAv6QxWI5KS23YkpYDp8AI8DSyGnjiBRYR54hF0wCApCKogHcRg2L3SF9SaBkrgNUhLeiGKjuZmyKR70gc+iRn2nQeqLxdsgESiXIsJKUa+f3SAyRH9QmjQXdbsFFqSgmNwGlGYVrL4mOSkMfOWkvqB8pIEIk9gsyAoO7gDlY0u415GAQRJw4DdE9EOQUPCWe+aAfxIOBaVZGCgNwUAJTbjnfmA6dFAEzSGCwQXWLgdKEkfqeEajog9/G6dY+wokNBlfwPEWRmM4Gx01h9jPulchlMWcapyz3GgcZSOrpgDB4agIER6UhSScd9do/GQjvqYQp+2EoMic+0WJH2oMk4lZ4Q6MdhjifGAhKIj3pCiDxDGZWEiMdwVlRXwd1yEkKJteeIN8ZAGr64W6Ikwni4PTEREivMMrvt/eIIdZJBsoC+VFmM4BQpx3E4LicO1r+fftAMpBmMhwju0rTkNQEa7fLv/Lm2wsrC7CvObrJQgByoXRrNHDaERk46etHxnPERZ/Uafus05Gb8d6+WO0oQYs/s8QxbjnLXn2TcvOjxAElB/c4J6VZRDDFg4s90OIkdzrttkVWmzwUF0fhsgj9skjg1hdTxYDpVla+MH6YwK7nRgmwtTUGKIgfGfdWXZvsPqJMBPEccKt4aLeTKe3nB3E4gfQ2MU/qhpcFHWGub0JzwH7RaHnMA3KQVIIC4pCQ2IoAZPgjlh3GorqeCxRHnaKwtILeGoxdhJqa3s+IqSD9rAa7oh/gNdj2AZd5dncjr+ClBUwCf4HjgAAAABJRU5ErkJggg=="
                    class="mr1x img-icon"
                  />
                  <span class="fsc1">小米发货</span>
                </div>
                <div class="flex service-policy-item" data-stat-id="3a1fe436f300b28c">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAChklEQVR4Ab3YA6zkUBgF4Lu2bdu2bdu2bdu2Ea1t27ZtW7OnyZnkz9s2r+3emSRfJlf/PaNKfW6pnAgB5aAHbIAH4KFnsAv6QxWI5KS23YkpYDp8AI8DSyGnjiBRYR54hF0wCApCKogHcRg2L3SF9SaBkrgNUhLeiGKjuZmyKR70gc+iRn2nQeqLxdsgESiXIsJKUa+f3SAyRH9QmjQXdbsFFqSgmNwGlGYVrL4mOSkMfOWkvqB8pIEIk9gsyAoO7gDlY0u415GAQRJw4DdE9EOQUPCWe+aAfxIOBaVZGCgNwUAJTbjnfmA6dFAEzSGCwQXWLgdKEkfqeEajog9/G6dY+wokNBlfwPEWRmM4Gx01h9jPulchlMWcapyz3GgcZSOrpgDB4agIER6UhSScd9do/GQjvqYQp+2EoMic+0WJH2oMk4lZ4Q6MdhjifGAhKIj3pCiDxDGZWEiMdwVlRXwd1yEkKJteeIN8ZAGr64W6Ikwni4PTEREivMMrvt/eIIdZJBsoC+VFmM4BQpx3E4LicO1r+fftAMpBmMhwju0rTkNQEa7fLv/Lm2wsrC7CvObrJQgByoXRrNHDaERk46etHxnPERZ/Uafus05Gb8d6+WO0oQYs/s8QxbjnLXn2TcvOjxAElB/c4J6VZRDDFg4s90OIkdzrttkVWmzwUF0fhsgj9skjg1hdTxYDpVla+MH6YwK7nRgmwtTUGKIgfGfdWXZvsPqJMBPEccKt4aLeTKe3nB3E4gfQ2MU/qhpcFHWGub0JzwH7RaHnMA3KQVIIC4pCQ2IoAZPgjlh3GorqeCxRHnaKwtILeGoxdhJqa3s+IqSD9rAa7oh/gNdj2AZd5dncjr+ClBUwCf4HjgAAAABJRU5ErkJggg=="
                    class="mr1x img-icon"
                  />
                  <span class="fsc1">7天无理由退货</span>
                </div>
                <!---->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 图片介绍 -->
      <div class="section section-detail">
        <div
          class="image_w_1080 offset-top-1px border-radius-25"
          style="padding-left: 0.32rem; padding-right: 0.32rem; background: rgb(255, 255, 255);"
        >
          <img
            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c17c060f7fbfd4c6c751bca5356c2adc.jpg?f=webp&amp;w=1080&amp;h=420&amp;bg=B678FF"
            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c17c060f7fbfd4c6c751bca5356c2adc.jpg?f=webp&amp;w=1080&amp;h=420&amp;bg=B678FF"
            lazy="loaded"
          />
        </div>
      </div>
      <div class="section section-detail">
        <div
          class="image_w_1080 offset-top-1px border-radius-25"
          style="padding-left: 0.32rem; padding-right: 0.32rem; background: rgb(255, 255, 255);"
        >
          <img
            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/57092eb9ba7da6c68ee0c656a1ef3a1a.jpg?f=webp&amp;w=1080&amp;h=420&amp;bg=D9E9FF"
            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/57092eb9ba7da6c68ee0c656a1ef3a1a.jpg?f=webp&amp;w=1080&amp;h=420&amp;bg=D9E9FF"
            lazy="loaded"
          />
        </div>
      </div>
      <div class="section section-detail">
        <div
          class="image_w_1080 offset-top-1px border-radius-25"
          style="padding-left: 0.32rem; padding-right: 0.32rem; background: rgb(255, 255, 255);"
        >
          <img
            data-src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/23a79f829f44d3a5383ffeca7fd868ff.jpg?f=webp&amp;w=1080&amp;h=420&amp;bg=F6921A"
            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/23a79f829f44d3a5383ffeca7fd868ff.jpg?f=webp&amp;w=1080&amp;h=420&amp;bg=F6921A"
            lazy="loaded"
          />
        </div>
      </div>
      <footer class="footer">
        <div class="fill-height layout align-center bgw">
          <a href="/" class="footer-btn router-link-active">
            <i class="image-icons footer-icon icon-home"></i>
            <span>首页</span>
          </a>
          <a>
            <i class="image-icons footer-icon icon-cart"></i>
            <span @click="$router.push('cart')">购物车</span>
            <!---->
          </a>
          <div class="action-box flex">
            <a class="btn buy-btn buy-btn-next" @click="incart" >立即抢购</a>
          </div>
        </div>
        <div class="safe-area-inset" style="background: transparent;"></div>
      </footer>
    </div>
    <van-loading size="3rem" vertical v-if="!this.data"></van-loading>
  </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      data: ""
    };
  },
  activated() {
    this.$http
      .post("/details", {
        product_id: this.$router.history.current.query.goodsid
      })
      .then(res => {
        this.data = res;
      });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    incart(){
      this.$http.post("/inscart",{
        checkisok:true,
        amounts:1,
        goodsid:this.data[0].product_id
      }).then((resa)=>{
        if( resa ==("1"||"2")){
          Toast.success('加入成功');
        }else{
          Toast.fail('加入失败');
        }
      })
    }
  }
};
</script>
<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
#box {
  padding: 0 0 2.060074rem 0;
}

.van-swipe-item img {
  display: block;
  width: auto;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  top: 50%;
}
// 头部样式
.header {
  width: 100%;
  height: 2.650186rem;
  position: absolute;
  padding: 0.265019rem 0.530037rem;
  z-index: 1;
  .fill-height {
    display: flex;
    justify-content: space-between;
    .icon-back {
      background-image: url("./img/back.png");
      background-size: 0.99382rem 0.99382rem;
    }
    .icon-share {
      background-image: url("./img/share.png");
      background-size: 0.99382rem 0.99382rem;
    }
    .image-icons {
      display: inline-block;
      width: 1.656366rem;
      height: 1.656366rem;
      background-color: transparent;
      background-repeat: no-repeat;
      background-position: 50%;
      //   background-size: cover;
    }
    .header-btn {
      display: block;
      width: 1.656366rem;
      height: 1.656366rem;
      margin: 0 0.2rem;
      color: #ddd;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 50%;
    }
    i {
      display: inline-block;
      width: 1.656366rem;
      height: 1.656366rem;
    }
  }
}

/* 标签样式 */
.top-overview {
  width: 100%;
  background-color: #f56600;
  color: #fff;
  padding: 0 0.32rem;
  line-height: 0.96rem;
  height: 2.650186rem;
}
.container .top-overview .top-left {
  /* min-width: ; */

  width: 5.650186rem;
  //   text-align: left;
  line-height: 5.088357rem;

  float: left;
}
.container .top-overview .top-right {
  text-align: right;
}
.fz-m {
  text-align: center;
  width: 5.650186rem;
  font-size: 0.84806rem !important;
  .pretxt {
    float: left;
    padding-top: 0.371026rem;
    padding-left: 0.530037rem;
  }
}
.price {
  float: left;
  position: relative;
  padding-left: 0.530037rem;
  line-height: 1.643115rem;
}
.container .overview .goods-name img {
  height: 0.42rem;
  width: auto;
  line-height: 0.36rem;
  margin-right: 0.1rem;
}
.fz-xl {
  padding-top: 1.060074rem;
  font-size: 0.954067rem !important;
}
.container .overview.overview-goods-name {
  padding: 0.32rem 0.32rem 0;
}
.container .overview .goods-name {
  line-height: 1.5em;
}
// 商品描述
.container .overview {
  background: #fff;
  text-align: left;
  padding: 0.32rem;
}
.goods-brief {
  text-align: left;
  padding: 0 0.885162rem;
  font-size: 0.662547rem;
  line-height: 1rem;
  word-break: break-all;
  color: rgba(0, 0, 0, 0.54);
}
// 价格标签
.overview.product_info_product_price {
  padding: 0 0.938166rem 0.938166rem;
}
.overview .goods-price {
  padding: 0.530037rem 0 0;
}
.overview .goods-price .cur-price {
  color: #ff6700;
  font-size: 1.325093rem;
}
.origin-price {
  margin-left: 0.16rem;
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.662547rem;
  text-decoration: line-through;
}
// 配置信息
.classic-param {
  padding: 0 0 0.16rem;
  text-align: center;
  overflow-x: auto;
}
.classic-param .classic-param-item img {
  display: block;
  margin: 0 auto;
  width: 1.104068rem;
  height: 1.104068rem;
}
.classic-param-item {
  min-width: 4.611324rem;
  margin: 0 0.026502rem;
  color: #676767;
}
// 切换商品
.border-1px.card-box {
  background-color: #fafafa;
  border-radius: 5px;
  overflow: hidden;
}
.margin-16-32-0 {
  margin: 0.441521rem 0.883042rem 0;
}
.padding-24-32 {
  padding: 0.662547rem 0.885162rem;
}
.padding-16-32 {
  padding: 0.662547rem 0.885162rem;
}
.product-section .img-icon {
  height: 0.551239rem;
  width: auto;
}

// 图片
.image_w_1080.border-radius-25 img {
  border-radius: 0.16rem;
  overflow: hidden;
}
.image_w_1080 {
  width: 100%;
  transform: translateZ(0);
}
.image_w_1080 img {
  display: block;
  width: 100%;
  height: auto;
  padding: 10px 0;
  vertical-align: top;
}
// 底部标签
.footer {
  padding: 0 0.16rem 0.16rem;
  background: transparent;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  .bgw {
    background-color: hsla(0, 0%, 100%, 0.96) !important;
    width: 100%;
    height: 2.894003rem;
    border: 1px solid #e5e5e5;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px rgba(0, 0, 0, 0.14),
      0 1px 10px rgba(0, 0, 0, 0.12);
    .footer-btn {
      position: relative;
      display: block;
      text-decoration: none;
      width: auto;
      margin-left: 0.5rem;
      color: rgba(0, 0, 0, 0.54);
    }
    .action-box {
      margin-right: 0.32rem;
      margin-left: 0.4rem;
      text-align: right;
      width: 5.724402rem;
    }
    span {
      font-size: 0.84806rem;
    }
    .btn {
      display: block;
      outline: 0;
      background: #ff6700;
      color: #fff;
      text-align: center;
      width: 40%;
      height: 1rem;
      margin-left: 5.300372rem;
      line-height: 1rem;
      font-size: 0.84806rem;
      border-radius: 1rem;
    }
  }
}
</style>