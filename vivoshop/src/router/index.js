import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/page/index'
import proDetail from '@/components/page/products/proDetail'
import cart from '@/components/page/cart/cart'
Vue.use(Router)


export default new Router({
  routes: [
    // 首页
    {
      path: '/',
      name: 'index',
      component: index
    },
    //商品详情
    {
      path: '/proDetail',
      component: proDetail,
      meta:{index:0}
    },
    {
      path: '/cart',
      component: cart
    }
  ]
})
