import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Home from '../pages/Home/Home.vue';
import Classify from '../pages/Classify/Classify.vue';
import Cart from '../pages/Cart/Cart.vue';
import My from '../pages/My/My.vue';
import Details from '../pages/Details';
import Search from '../pages/Search';
import Login from '../pages/login/Login.vue';
import Register from '../pages/login/Register.vue';
import Cookies from 'js-cookie'
const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            name:"Home",
            component:Home,
            meta: {
                miss: true
            }
        },
        {
            path: "/classify",
            name: "classify",
            component: Classify,
            meta: {
                miss: true
            }
        },
        {
            path: "/cart",
            name: "cart",
            component: Cart,
            meta: {
                miss: true
            }
        },
        {
            path: "/my",
            name: "my",
            component: My,
            meta: {
                miss: true
            }
        },
        {
            path: "/details",
            name: "details",
            component: Details,
            meta: {
                miss: false
            }
        },
        {
            path: "/search",
            name: "search",
            component: Search,
            meta: {
                miss: false
            }
        },
        {
            path: "/login",
            name: "login",
            component: Login,
            meta: {
                miss: false
            }
        },
        {
            path: "/register",
            name: "register",
            component: Register,
            meta: {
                miss: false
            }
        }
    ]
})
router.beforeEach((to, from, next) => {
    const nextRoute = ['my', 'cart'] // 需要登录的页面
    let isLogin = Cookies.get('userpass') // 判断是否登录，本地存储有用户数据则视为已经登录
    // 未登录状态；当路由到 nextRoute 指定页时，跳转至 UserLogIn
    if (nextRoute.indexOf(to.name) >= 0) { // 检测是否登录的页面
        if (!isLogin) { // 如果未登录（本地存储无用户数据），并且要跳到登录页面
            if (from.name === 'login') {
                next('/')
                return
            }
            // 登录后，跳到到当前页面
            router.push({
                name: 'login',
                params: {
                    redirect: to.fullPath
                }
            })
        }
    }
    // 已登录状态；当路由到 UserLogIn 时，跳转至 Home
    if (to.name === 'login') {
        if (isLogin) {
            next('/')
            return
        }
    }
    next() // 必须使用 next ,执行效果依赖 next 方法的调用参数
})
export default router;
{/* <van-swipe-item>
          <img v-lazy="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0f5689a958dde6ae56f680d3f0401ea7.jpg"/>
        </van-swipe-item>
        <van-swipe-item>
          <img v-lazy="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a7b299e3805d12fdeea6afc9e5701b91.jpg"/>
        </van-swipe-item>
        <van-swipe-item>
          <img v-lazy="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1f81d299fed62eac8da88c58631f801.jpg" />
        </van-swipe-item>
        <van-swipe-item>
          <img v-lazy="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e42dc47f401112be4fe3a186abba182e.jpg" />
        </van-swipe-item> */}