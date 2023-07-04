import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


import HomeView from '../views/HomeView.vue'
import Info from '../views/InfoPlatform.vue'
import Predict from '../views/QualityPredict.vue'
import Solution from '../views/QualitySolution.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    children:[
     {
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

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
