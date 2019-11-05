<template>
  <div class="classify">
    <!-- <div class="header">
      <van-nav-bar title="分类" left-text="返回" left-arrow>
        <van-icon name="search" @click="clickright()" slot="right" />
      </van-nav-bar>
    </div> -->
    <div class="main">
      <Shopping></Shopping>
    </div>
  </div>
</template>
<script>
import Shopping from "./shopping.vue";
import {bus} from "../../bus.js";
export default {
  data() {
    return {
      name: "分类",
      title: "nihao",
      activeKey: 0
    };
  },
methods: {
    clickright() {
      window.console.log("123456");
    },
    clickle() {
      window.console.log("123456");
    }
  },
  components: {
    Shopping
  },
  mounted(){
        bus.$emit('headjt',{isok:true,title:"分类"});
    },
    activated(){
        bus.$emit('headjt',{isok:true,title:"分类"});
    }
};
</script>
<style lang="less" scoped>
.classify {
  position: relative;
  width: 100%;
  z-index: 1;
}

.van-sidebar {
  padding-top: 2.930731rem;
  padding-bottom: 2.930731rem;
  float: left;
  overflow: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 4.662526rem;
  overflow-y: auto;
}
.van-nav-bar {
  position: fixed;
  height: 2.664301rem;
  width: 100%;
  line-height: 2.664301rem;
}
.van-row {
  padding-top: 15%;
}
.main {
  position: relative;
  /* max-width: 7.2rem; */
  margin: 0 auto;
}

</style>