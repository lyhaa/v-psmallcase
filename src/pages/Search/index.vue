<template>
  <div class="search">
    <van-nav-bar>
      <van-icon name="search" slot="right" color="#666" size="1.278864rem" />
      <van-search slot="title" left-icon placeholder="搜索商品名称" />
      <van-icon
        name="arrow-left"
        slot="left"
        color="#666"
        size="1.278864rem"
        @click="$router.history.go(-1)"
      />
    </van-nav-bar>
    <div>
      <van-loading vertical v-if="!data" />
    </div>
    <div v-if="data">
      <div class="search-promotion-title">热门搜索</div>
      <div class="t_img">
        <img width="100%" :src="data.ad_list[0].body.items[0].img_url" alt />
      </div>
      <div class="search-key">
        <a
          href="javascript:;"
          v-for="(item,index) in data.keywords"
          :key="index"
          :style="`background-color:${item.back_n};color:${item.font_n};border:2px solid ${item.border_n}`"
        >{{item.word}}</a>
      </div>
      <div class="search-promotion-title">常用分类</div>
      <div class="hotClassify-list">
        <a href="javascript:;" v-for="(item,index) in data.hot_class" :key="index">{{item.name}}</a>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
  data() {
    return {
      name: "搜索",
      data: "",
      isLoading: false
    };
  },
  created() {
    this.$http.get("/se_default").then(res => {
      this.data = res[0];
    });
    // this.$store.commit('UPDAT_EUSER','你好');
    this.username("你好");
    window.console.log(this.$store);
  },
  methods: {
    ...mapActions(['username'])
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
.van-nav-bar__title {
  max-width: 75%;
  .van-search {
    padding: 0;
    margin-top: 0.26643rem;
  }
}
.search-promotion-title {
  padding: 0 0.79929rem;
  font-size: 0.639432rem;
  line-height: 2.131441rem;
}
.search-key {
  margin: 0.26643rem 0.426288rem;
  a {
    padding: 0.319716rem;
    display: inline-block;
    margin: 0.26643rem;
    font-size: 0.692718rem;
    // border: 2px solid;
  }
}
.hotClassify-list {
  padding-left: 0.79929rem;
  max-height: 3.103733rem;
  overflow: hidden;
  a {
    display: inline-block;
    background: #f5f5f5;
    color: rgba(0, 0, 0, 0.54);
    font-size: .639432rem;
    padding: 0 .426288rem;
    line-height: 1.33215rem;
    margin-right: .426288rem;
    margin-bottom: .26643rem;
  }
}
</style>