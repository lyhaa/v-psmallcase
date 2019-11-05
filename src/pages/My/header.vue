<template>
  <header @click="go" class="hd">
    <div class="user ui-flex align-center">
      <div class="img">
        <img src="./img/avatar.76a75b8f17.png" />
      </div>
      <div class="name">{{this.Cookies.get("userpass")?this.Cookies.get("userpass"):'登录/注册'}}</div>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    go() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
<style scoped lang="less">
* {
  background-repeat: no-repeat;
  padding: 0;
  margin: 0;
}
.hd {
  width: 100%;
  background: url(img/bg.63c8e19851.png) center;
  background-color: #f37d0f;
  background-size: auto 100%;
  padding: 0.95rem 0;
  .user {
    .img {
      margin: 0 0.5rem 0 1rem;
      width: 2.650186rem;
      height: 2.650186rem;
      overflow: hidden;
      box-sizing: border-box;
      border-radius: 100%;
      border: 3px solid hsla(0, 0%, 100%, 0.4);
      text-align: center;
      img {
        width: auto;
        height: 100%;
        margin: 0 auto;
      }
    }
  }
  .ui-fiex {
    display: flex;
  }
  .name {
    color: #fff;
    font-size: 0.24rem;
    text-align: left;
  }
}
</style>