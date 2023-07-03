import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NavBar from '../components/NavBar.vue'
import About from '../views/AboutView.vue'
import Info from '../views/InfoPlatform.vue'
import Predict from '../views/QualityPredict.vue'
import Solution from '../views/QualitySolution.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children:[
      {
        path:'/home/about',
        component:About
      },{
        path:'/home/InfoPlatform',
        component:Info
      },{
        path:'/home/QualityPredict',
        component:Predict
      },{
        path:'/home/QualitySolution',
        component:Solution
        },

    ]
  },
  {
    path: '/nav',
    name: 'nav',
    component: NavBar
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
