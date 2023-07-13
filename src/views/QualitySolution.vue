<template>
  <div class="back-pc">
    <a-input placeholder="Region(latitude and longitude)" 
      readonly style="width: 20vw; margin: 10vh;">
    </a-input>
    <a-row>
    <a-col :span="4"></a-col>
    <a-col :span="16">
      <a-table :columns="columns" 
        :data-source="table_data"          
        bordered   > 
        <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'name'">
        <a>{{ text }}</a>
        </template>
        </template>
      </a-table>   
    </a-col>
    <a-col :span="4">col-2</a-col>
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
const columns = [
  {
  title: 'Problem',
  dataIndex: 'problem',
  },
  {
  title: 'Success case',
  dataIndex: 'Success case',
  },
];

const table_data = [{

}];

export default defineComponent({
  setup(){
    const handleChange = (from:any,to:any) =>{
        console.log("from:"+from)
        console.log("to:"+to)
    };
    return{
      handleChange,
      columns,
      table_data

    }
  },
  mounted() {
    //line();
  },
})

 
  
</script>

<style scoped>
/*走马灯 */
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