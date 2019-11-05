<template>
  <div>
    <div class="main-left">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          v-for="(key,index) in shop"
          :title="key.category_name"
          :key="index"
          :class="{active: active===index }"
          @click="scrollTo(index)"
        />
      </van-sidebar>
    </div>

    <div class="list-wrap">
      <!-- 循环出所有分组 -->
      <div v-for="(key,index) in shop" :key="index" class="list-item category0" ref="listitem">
        <!-- 循环每小组的分组 -->
        <div v-for="(key,index) in key.category_list" :key="index" class="component-list-main">
          <!-- 标题头 -->
          <div
            v-if="key.body.items&& key.body.items[0].path_type=='image'"
            class="cells_auto_fill"
            index="0"
          >
            <a class="exposure items" style="height:5.541746rem;width:13.854364rem">
              <img
                :src="key.body.items?key.body.items[0].img_url_webp:''"
                style="height:5.541746rem;width:13.854364rem ;"
                lazy="loaded"
              />
            </a>
          </div>
          <!-- 标题 -->
          <div v-if="key.body.category_name" name="m1" class="category_title">
            <span>{{key.body.category_name}}</span>
          </div>
          <!-- 商品列表 -->
          <div
            v-if="key.body.items&&key.body.items.length >1"
            class="category_group box-flex"
            index="2"
          >
            <!-- 循环里分类小组 -->
            <div class="box">
              <div v-for="(key,index) in key.body.items" :key="index" class="product">
                <a class="exposure item">
                  <div @click="Jumpdetails" class="img">
                    <img
                      class="big"
                      style="width: 2.760434rem; height: 2.760434rem"
                      :src="key.img_url_webp"
                      lazy="loaded"
                    />
                    <!---->
                  </div>
                  <!-- 副标题 -->
                  <div class="name">{{key.product_name}}</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-loading size="24px" vertical v-if="!this.shop">加载中...</van-loading>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      shop: "",
      activeKey: "",
      src: ""
    };
  },

  // 加载前触发请求拿数据渲染
  created() {
    // window.console.log(this);
    this.$http.get("/classify").then(response => {
      // const data = response.data;
      // window.console.log("全部数据", data);
      // window.console.log(data[0].category_name);
      this.shop = response;
      // window.console.log(response);
    });
  },
  mounted() {
    // 监听滚动事件
    window.addEventListener("scroll", this.onScroll);
    // window.console.log(this.onScroll);
  },
  destroy() {
    // 移除监听器，vue组件被销毁了，监听器还在就会出错
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    // 把商品ID传给详情页
    Jumpdetails() {
      this.$router.push({ name: "details", params: { goodsID: "1" } });
    },
    // 滚动监听器
    onScroll() {
      // 获取所有锚点元素
      // window.console.log(this);
      const navContents = this.$refs.listitem;
      // window.console.log(navContents);
      // 所有锚点元素的 offsetTop
      const offsetTopArr = [];
      navContents.forEach(item => {
        // window.console.log(item)
        offsetTopArr.push(item.offsetTop);
        // window.console.log(index, item.offsetTop);
      });
      // 获取当前文档流的 scrollTop
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 定义当前点亮的导航下标
      let navIndex = 0;
      for (let n = 0; n < offsetTopArr.length; n++) {
        // 如果 scrollTop 大于等于第 n 个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
        // 那么此时导航索引就应该是 n 了
        if (scrollTop >= offsetTopArr[n]) {
          navIndex = n;
        }
      }
      // 把下标赋值给 vue 的 data
      // window.console.log(navIndex);
      this.active = navIndex;
    },
    // clicks(inx) {
    //   window.console.log(inx);
    // },
    scrollTo(index) {
      // 获取目标的 offsetTop
      // css选择器是从 1 开始计数，我们是从 0 开始，所以要 +1
      const targetOffsetTop = this.$refs.listitem[index].offsetTop;
      // 获取当前 offsetTop
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop > targetOffsetTop) {
        // 往上滑
        document.documentElement.scrollTop = targetOffsetTop;
      } else {
        // 往下滑
        document.documentElement.scrollTop = targetOffsetTop;
      }
    }
  }
};
</script>
<style scoped lang="less">
@import "./classify01.css";
@import "./classify02.css";
@import "./classify03.css";
@import "./classify04.css";
/* 侧边导航栏激活改变样式 */
.active {
  color: #fb7d34;
  font-size: .84806rem;
}
/* 默认状态样式 */
.van-sidebar-item--select {
  border-color: transparent;
  background-color: #fafafa;
}

/* 隐藏滚动条 */
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
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
.van-row {
  padding-top: 15%;
}
.main {
  position: relative;
  /* max-width: 7.2rem; */
  margin: 0 auto;
}

.list-wrap {
  padding-top: 2.930731rem;
  padding-bottom: 2.930731rem;
  padding-left: 11.84em;
  padding-right: 0.32rem;
}
.category_title {
  width: 14.045986rem;
  height: 3.533228rem;
  text-align: center;
}
.category_title span {
  line-height: 3.533228rem;
}
.product {
  width: 4.637826rem;
  height: 4.219096rem;
  float: left;
}
.component-list-main .category_group .product .img {
  width: 2.760434rem;
  height: 2.760434rem;
  margin: 0 auto;
  background: #fff;
  overflow: hidden;
}

.component-list-main .category_group .name {
  margin-top: 0.28rem;
  /* 设置滚动条 */
  /* overflow-x: scroll;  */
  /* white-space: nowrap; */
  font-size: 0.23rem;
  color: rgba(0, 0, 0, 0.54);
}
.category_title {
  width: 14.045986rem;
  height: 3.533228rem;
  text-align: center;
}
</style>