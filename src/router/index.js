import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
	path:"/directory",
	name:"directory",
	component: () => import("../views/DirectoryView.vue")
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
	path:"/profile",
	name:"profile",
	component:() => import("../views/ProfileView.vue"),
	meta:{
		requiresAuth:true
	}
  },
  {
	path:"/login",
	name:"login",
	component: () => import("../views/LoginView.vue")
  },
  {
    path:"/admin",
    name:"admin",
    component:() => import("../views/AdminProfileView.vue")
  },
  {
    path:"/anime/:name",
    name:"anime",
    component: () => import("../views/AnimeView.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(route => route.meta.requiresAuth)) {
	  if (store.getters.isAuthenticated) {
		next();
	  } else {
		next('/login');
	  }
	} else {
	  next();
	}
  });

export default router
