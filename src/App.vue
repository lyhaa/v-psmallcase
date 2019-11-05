<template>
  <div id="app">
    <div>
      <div v-show="this.$route.meta.miss">
        <transition name="navani">
          <van-nav-bar fixed :title="title" style="color: #666;background: #f2f2f2;"  :z-index="300" v-show="h_isok" >
            <van-icon name="search" slot="right" color="#666" @click="$router.history.push('/search')"  size="1.278864rem" />
            <van-icon name="arrow-left" color="#666" slot="left" size="1.278864rem" @click="$router.go(-1)" />
          </van-nav-bar>
        </transition>
      </div>
    <transition name="entrance">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
      <!-- <router-view></router-view> -->
      <Footer ref="footer" v-show="this.$route.meta.miss"/>
    </div>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import {bus} from "./bus.js";
export default {
  name: "app",
  data () {
    return {
      h_isok:Boolean,
      title:"",
      routeisok:false,
      cisok:true
    }
  },
  watch:{
  },
  components: {
    Footer
  },
  created(){
    bus.$on('headjt',(arg)=> {
          this.h_isok = arg.isok;
          this.title = arg.title;
    }),
    bus.$on('tabjt',(val)=>{
      this.cisok = val;
      if(this.cisok){
        this.$refs.footer.$el.style.display = 'block';
      }else{
        this.$refs.footer.$el.style.display = 'none';
      }
    })
  },
  methods:{
    
    }
};
</script>
<style lang="less" scoped>
.navani-enter-active{
  animation: fadeInDown .5s;
}
.navani-leave-active {
  animation: fadeInUp .3s reverse;
}
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}


@keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}
.entrance-enter-active{
  animation: fadeIn .5s;
}

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

</style>
