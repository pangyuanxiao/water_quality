<template>
  <a-menu
    id="dddddd"   
    style="background-color:whitesmoke;lineHeight: 5vh"
    v-model:selectedKeys="selectedKeys"
    mode="horizontal"

  >
 
    <a-menu-item key="1" >
     <router-link to="/home/QualityPredict">QualityPredict</router-link>
    </a-menu-item>
    <a-menu-item key="2" >
     <router-link to="/home/QualitySolution">QualitySolution</router-link>
    </a-menu-item>
    <a-menu-item key="3" >
     <router-link to="/home/InfoPlatform">InfoPlatform</router-link>
    </a-menu-item>
    
  </a-menu>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  computed:{
    menuRoutes(){
      return this.$router.options.routes[0].children
    }
  },
  data(){

    return{
      
      menuRoute:{
        "/home/QualityPredict":'1',
        "/home/QualitySolution":'2',
        "/home/InfoPlatform":'3'
      },
      selectedKeys:['']
    }
  },
  methods:{
    updateActive(newRoute:string){

      if(newRoute === '/home/QualityPredict'){
        this.selectedKeys = ['1']
      } else if (newRoute === '/home/QualitySolution') {
        this.selectedKeys = ['2']
      } else {
        this.selectedKeys = ['3']
      }
      // this.$route.path
      // console.log(this.$route.path)
      // console.log(this.$router.options.routes[0].children)
      //this.selectedKeys = this.menuRoute[newRoute]
      

    }
  },
  
  watch:{
     '$route.path'(newRoute){
     
          this.updateActive(newRoute)
         
     }
  },
  
  

})
</script>

<style>

</style>