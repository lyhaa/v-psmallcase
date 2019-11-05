<template>
  <div>
    <!-- 订单页面 -->
    <div class="b1 ui-flex align-center justify-space-between">
      <div class="cite">我的订单</div>
      <div class="span ui-flex align-center">
        <a href="#" class>全部订单 ></a>
      </div>
    </div>
    <!-- 订单详情 -->
    <ul class="b2 ui-flex align-center justify-space-between">
      <li class="dfk">
        <a href="#" class>
          <div class="icon"></div>
          <span>待付款</span>
          <!---->
        </a>
      </li>
      <li class="dah">
        <a href="#" class>
          <div class="icon"></div>
          <span>待收货</span>
          <!---->
        </a>
      </li>
      <li class="thx">
        <a href="#">
          <div class="icon"></div>
          <span>退换修</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped lang="less">
// <!-- 订单页面 -->
a {
  text-decoration: none;
}
.b1 {
  background-color: #fff;
  height: 2.204955rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  color: rgba(0, 0, 0, 0.54);
  position: relative;
  padding-right: 0.56rem;
  a {
    color: rgba(0, 0, 0, 0.87);
    font-size: 0.642052rem;
    padding-right: 0.530037rem;
  }
  .cite {
    font-size: 0.642052rem;
    padding: 0 0 0 0.84806rem;
    color: rgba(0, 0, 0, 0.87);
  }
}
// <!-- 订单详情 -->
.b2 {
  padding: 0 2.204955rem;
  background-color: #fff;
  li {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-align-content: space-between;
    align-content: space-between;
    position: relative;
    padding: 1.104068rem 0;
    span {
      color: rgba(0, 0, 0, 0.87);
    }
  }
}
.b2 li:nth-of-type(1) .icon {
  width: 1.325093rem;
  height: 1.325093rem;
  margin: 0 auto 0.41152rem;
  background: url(./img/dfk.png) no-repeat center 0;
  background-size: 100% auto;
}
.b2 li:nth-of-type(2) .icon {
  width: 1.325093rem;
  height: 1.325093rem;
  margin: 0 auto 0.41152rem;
  background: url(./img/dsh.png) no-repeat center 0;
  background-size: 100% auto;
}
.b2 li:nth-of-type(3) .icon {
  width: 1.325093rem;
  height: 1.325093rem;
  margin: 0 auto 0.41152rem;
  background: url(./img/thx.png) no-repeat center 0;
  background-size: 100% auto;
}
</style>