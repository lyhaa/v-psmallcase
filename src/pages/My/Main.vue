<template>
  <ul data-v-172bb70c class="items">
    <div class="interval"></div>
    <li class="i-member">
      <a href="/mpointsmall" class>
        <img src="./img/hyzx.png" style="width:25px;height:25px" alt />
        <span>会员中心</span>
      </a>
    </li>
    <li class="i-wallet">
      <a href="/user/coupon" class>
        <img src="./img/wdyh.png" style="width:25px;height:25px" alt />
        <span>我的优惠</span>
      </a>
    </li>
    <div class="interval"></div>
    <li class="i-service">
      <a href="/services" class>
        <img src="./img/fyzx.png" style="width:25px;height:25px" alt />
        <span>服务中心</span>
      </a>
    </li>
    <li class="i-mihome">
      <a href="/services" class>
        <img src="./img/xmzj.png" style="width:25px;height:25px" alt />
        <span>小米之家</span>
      </a>
    </li>
    <div class="interval"></div>
    <li class="i-fcode">
      <a href="/services" class>
        <img src="./img/wdfm.png" style="width:25px;height:25px" alt />
        <span>我的F码</span>
      </a>
    </li>
    <li class="i-gift">
      <a href="/services" class>
        <img src="./img/lwmdh.png" style="width:25px;height:25px" alt />
        <span>礼物码兑换</span>
      </a>
    </li>
    <div class="interval"></div>
    <li class="i-setting">
      <a href="/services" class>
        <img src="./img/sz.png" style="width:25px;height:25px" alt />
        <span>设置</span>
      </a>
    </li>
  </ul>
</template>
<script>
export default {};
</script>
<style scoped lang="less">
.items li {
  height: 2.923685rem;
  text-align: center;
  line-height: 2.923685rem;
  //   position: relative;
  color: rgba(0, 0, 0, 0.54);
  // background: url(img/sz.png) no-repeat .32rem;
  // background-size: .48rem auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  line-height: 0;
  list-style: none;
  a {
    display: block;
    height: 2.923685rem;
    padding-right: 1.545589rem;
    padding-left: 3.091707rem;
    display: box;
    display: -webkit-box;
    box-align: center;
    -webkit-box-align: center;
    box-pack: justify;
    -webkit-box-pack: justify;
    color: currentColor;
    img {
      position: relative;
      left: -1.908134rem;
      //   top: 1px;
      //   top: 0.053004rem;
    }
  }
  span {
    position: relative;
    left: -1.060074rem;

    top: -0.318022rem;
    height: 2.923685rem;
    font-size: 0.768554rem;
    font-style: normal;
    color: rgba(0, 0, 0, 0.87);
  }
}
ul .interval {
  width: 100%;
  height: 0.530037rem;
  background: #f5f5f5;
}
</style>