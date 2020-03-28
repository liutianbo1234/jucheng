import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
	
	
  },
  {
    path: '/about',
    name: 'about',

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
	path:'/ditu',
	name:'ditu',
	
	
	 component: () => import(/* webpackChunkName: "about" */ '../views/ditu.vue')
  },
  {
	  path:'/main',
	  name:'main',
	  component:()=>import('../views/main.vue')
   },
   {
	  path:'/me',
	  name:'me',
	  meta: {
	   requireAuth:true, // 判断是否需要登录
	  },
	  component:()=>import('../views/me.vue')
   },
   {
	   path:'/login',
	   name:'login',
	   component:()=>import('../views/login.vue')
   },
   {
	   path:'/detail',
	   name:'detail',
	   component:()=>import('../views/Detail.vue')
   },
     {
		 path:'/search',
		 name:'search',
		 component:()=>import ('../views/search/search.vue')
	 },
	{
		path:'/theaterchild',
		name:'theaterchild',
		component:()=>import('../views/theater/theaterchild.vue')
	},
	{
		path:'/child',
		name:'child',
		component:()=>import('../views/child1.vue')
	}
]



const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})




export default router
