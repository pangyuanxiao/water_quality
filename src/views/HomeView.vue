<template>
  <div >
   
    <a-layout style="background: #fff; ">
      <a-layout-sider >
        <NavBar/>
      </a-layout-sider>
      
      <a-layout-content  style="background: #fff">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    NavBar
  }
}
</script>
