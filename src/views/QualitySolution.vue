<template>
  <div class="back-pc">
    <a-input placeholder="Region(latitude and longitude)" 
      readonly style="width: 20vw; margin: 10vh;">
    </a-input>
    <a-row>
    <a-col :span="2">col-2</a-col>
    <a-col :span="9">
      <div>
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
      </div>   
    </a-col>
    <a-col :span="2">col-2</a-col>
    <a-col :span="9">col-8</a-col>
    <a-col :span="2">col-2</a-col>
    </a-row>
    <!-- 走马灯 -->
    <a-carousel 
    autoplay
    :dots="false"
    :beforeChange="handleChange">
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </a-carousel>
      
    
    
  </div>
  
</template>

<script lang="ts">
//import { line } from './graph'

import { defineComponent } from 'vue';

export default defineComponent({
  setup(){
    const handleChange = (from:any,to:any) =>{
        console.log("from:"+from)
        console.log("to:"+to)
    };
    return{
      handleChange
    }
  },
  mounted() {
    //line();
  },
})

 
  
</script>

<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>