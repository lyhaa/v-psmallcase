<template>
  <div class="Home">
    <van-nav-bar fixed>
      <slot slot="title" name="title">
        <van-search placeholder="请输入搜索关键词" v-model="value" disabled />
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
    <van-swipe  indicator-color="white" :loop="false">
        <van-swipe-item>
            <img width="100%" data-v-79a5cf42="" class="swiper-lazy swiper-lazy-loaded" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/36b5b151fe94bc6f0024231b9797cbfc.jpg?thumb=1&amp;w=720&amp;h=360">
        </van-swipe-item>
        <van-swipe-item>
            <img width="100%" data-v-79a5cf42="" class="swiper-lazy swiper-lazy-loaded" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/36b5b151fe94bc6f0024231b9797cbfc.jpg?thumb=1&amp;w=720&amp;h=360">
        </van-swipe-item>
        <van-swipe-item>
            <img width="100%" data-v-79a5cf42="" class="swiper-lazy swiper-lazy-loaded" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/36b5b151fe94bc6f0024231b9797cbfc.jpg?thumb=1&amp;w=720&amp;h=360">
        </van-swipe-item>
        <van-swipe-item>
            <img width="100%" data-v-79a5cf42="" class="swiper-lazy swiper-lazy-loaded" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/36b5b151fe94bc6f0024231b9797cbfc.jpg?thumb=1&amp;w=720&amp;h=360">
        </van-swipe-item>
    </van-swipe>
    {{name}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "Home",
      value: ""
    };
  }
};
</script>
<style lang="less" scoped>
.Home {
    margin-top: 2.557729rem;
    .van-cell /deep/ .van-field__left-icon .van-icon{
        color: #969799;
    }
  .van-search {
    padding: 0.319716rem 0 0 0;
  }
  .van-nav-bar__title {
    max-width: 75%;
  }
  .logo {
    width: 1.172292rem;
    // size: .746004rem
  }
}
</style>