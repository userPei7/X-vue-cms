import Vue from 'vue'
import Router from 'vue-router'

import HomeComponent from '../page/home/'
import MemberComponent from '../page/member/'
import ShopcarComponent from '../page/shopcar/'
import SearchComponent from '../page/search/'
import newsListComponent from '../page/newsList/'
import newsInfoComponent from '../page/newsInfo/'
import photoListComponent from '../page/photoList/'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeComponent },
    { path: '/member', component: MemberComponent },
    { path: '/shopcar', component: ShopcarComponent },
    { path: '/search', component: SearchComponent },
    { path: '/home/newsList', component: newsListComponent },
    { path: '/home/newsInfo/:id', component: newsInfoComponent },
    { path: '/home/photoList', component: photoListComponent },
  ],
  linkActiveClass: 'mui-active'
})
