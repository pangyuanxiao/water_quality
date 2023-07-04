<template>
  <div >
   
    <a-layout >
      <a-layout-header style="padding: 0px;height: 10vh;">
        <NavBar/>
      </a-layout-header>
      
      <a-layout-content  style="background: #fff;height: 90vh">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script lang="ts">
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
