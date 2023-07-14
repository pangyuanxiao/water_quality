<template>
  <div class="back-pc">
  
   
    <a-row>
    <a-col :span="4">  

    </a-col>
    <a-col :span="16">
      <a-row>
        <a-col :span="12" style="padding:10px ;">
          <h2></h2>
          
      <i>
        Agricultural management measures: 
      </i>      
      <p>
        Reducing the use of fertilizers and pesticides, improving soil conservation capacity, and implementing appropriate fertilization to reduce the load of agricultural non-point source pollution. 
      </p>
      <i>
        Wastewater treatment:
      </i>
      <p>
        Improving urban and industrial wastewater treatment facilities to ensure efficient wastewater treatment processes, reducing the discharge of organic matter and nutrient substances. 
      </p>
      <i>
        Soil erosion control around lakes:
      </i>
      <p>
        Taking measures to reduce soil erosion in farmland and around lakes, preventing nutrients and suspended solids from entering lakes. 
      </p>
      <i>
        Water resource management: 
      </i>
      <p>
        Restricting water use and protecting natural wetlands around lakes to reduce nutrient inflow to lakes.
      </p>
      <i>
        Monitoring and research:
      </i>
      <p>
        Conducting continuous water quality monitoring to understand the ecological status of lakes and the changing trends of eutrophication issues.
      </p>
 
 
 

          
        </a-col>
        <a-col :span="12" style="padding:10px ;">
          <i>Success Cases</i>
          <p>
            Sweden has implemented strict agricultural management measures, wastewater treatment mechanisms, soil erosion control around lakes, management of water resources around lakes, and continuous monitoring of water quality to achieve the governance of eutrophication in Lake Vänern.
          </p>
        </a-col>
      </a-row>
      <a-carousel 
      autoplay
      :dots="false"
      :beforeChange="handleChange">
      <div>
        <p>Tokyo：Tokyo encourages residents and businesses to reduce water 
          consumption and improve water efficiency, strengthens the protection of water resources and the environmental conservation of water sources, enhances the management and supervision of source water protection areas, ensures water quality safety and sustainable water supply. Tokyo has also strengthened urban sewage treatment and water environment governance, constructing and renovating sewage treatment facilities, improving sewage treatment capacity, and reducing pollution to water sources and the water environment.</p></div>
      <div>
        <p>
          Washington D.C.:Firstly, Washington has implemented strict water resource allocation and management systems to ensure fair and reasonable distribution of water resources. Secondly, efforts have been made to strengthen the control of pollutant emissions to reduce water pollution, and regular water quality monitoring is conducted to identify and address issues promptly. In addition, the state government actively promotes public education to reduce pollution and waste on water bodies.
        </p>
      </div>
      <div>
        <p>
          Beijing:Beijing encourages water conservation through the implementation of price incentive policies and the establishment of a water quota system. Additionally, efforts are made to enhance the protection of water resources, water source environments, and soil. The city also focuses on strengthening urban sewage treatment capacity to reduce pollution to water sources and the water environment.
        </p>
      </div>
    </a-carousel>
    </a-col>
    <a-col :span="4"></a-col>
    </a-row>
    <!-- 走马灯 -->
    
      
    
    
  </div>
  
</template>

<script lang="ts">
//import { line } from './graph'

import { defineComponent, ref, } from 'vue';



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
    const visible = ref<boolean>(false);

    const showModal = () => {
      visible.value = true;
    }
    const handleChange = (from:any,to:any) =>{
        // console.log("from:"+from)
        // console.log("to:"+to)
    };
    return{
      handleChange,
      columns,
      table_data,
      visible,
      showModal,
      


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
  
  background: whitesmoke;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>