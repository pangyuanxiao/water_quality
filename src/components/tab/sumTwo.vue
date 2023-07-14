<template>

<div class="my-table">

    
    <a-modal v-model:visible="visible" :footer="null" :title="picture_title" class="display">
      <div>
          
         <img :src="imgs[currentImgIndex]" alt="1233" class="displayImg">
         

      </div>
     
    </a-modal>
    <a-alert
      message="Outline"
      description="Total phosphorus 、Total nitrogen 、dissolved oxyge"
      type="error"
    />
    <a-table :columns="columns" 
    :data-source="table_data" 
    :pagination="pagination"
    
    bordered   > 
    <template #bodyCell="{ column, text }">
    <template v-if="column.dataIndex === 'name'">
    <a>{{ text }}</a>
    </template>
    </template>
    </a-table>
        
   
    
</div>
</template>

<script lang="ts">
import { defineComponent, ref} from 'vue';
import {total2} from '@/assets/data/area2/total2'
import {pictureIndex} from '../../util/getUrl'

const table_data = total2;
const visible = ref<boolean>(false);
const picture_title=ref <string>('')





export default defineComponent({
  
  
    setup(){
      const currentImgIndex = ref<number>(4)
      const imgs=[
          require("@/assets/imgs/area2/1Chemicaloxygendemand.png"),

          require("@/assets/imgs/area2/2dissolvedoxyen.png"),

          require("@/assets/imgs/area2/3Dissolvedtotalorganiccarbon.png"),

          require("@/assets/imgs/area2/4PH.png"),

          require("@/assets/imgs/area2/5phosphate.png"),

          require("@/assets/imgs/area2/6silicate.png"),

          require("@/assets/imgs/area2/7Totalnitrogen.png"),

          require("@/assets/imgs/area2/8Totalphosphorus.png"),
        ]
     
      const showPicture = (column: any) => {
            return {
              onClick: () => {
               currentImgIndex.value=pictureIndex(column.key)
                picture_title.value = column.key 
                visible.value = true;
                
                //console.log(currentImgIndex)
                
              }
            };
          }
      
      const columns = [{
    title: 'record_date',
    dataIndex: 'record_date',
  },
  {
    title: 'Chemical oxygen demand',
    dataIndex: 'Chemical oxygen demand',
    customHeaderCell: showPicture
  },
  {
    title: 'dissolved oxygen',
    dataIndex: 'dissolved oxygen',
    customHeaderCell: showPicture
  },
  {
    title: 'Dissolved total organic carbon',
    dataIndex: 'Dissolved total organic carbon',
    customHeaderCell: showPicture
  },
  {
    title: 'PH',
    dataIndex: 'PH',
    customHeaderCell: showPicture
  },
  {
    title: 'phosphate',
    dataIndex: 'phosphate',
    customHeaderCell: showPicture
  },
  {
    title: 'silicate',
    dataIndex: 'silicate',
    customHeaderCell: showPicture
  },
  {
    title: 'Total nitrogen',
    dataIndex: 'Total nitrogen',
    customHeaderCell: showPicture
  },
  {
    title: 'Total phosphorus',
    dataIndex: 'Total phosphorus',
    customHeaderCell: showPicture
  },
]
     
      const showModal = () => {
      visible.value = true;
    }
      
        return{
            table_data,
            columns,
            pagination: {
                pageSize: 10 // 每页显示 5 行数据
            },
            visible,
            showModal,
            picture_title,
            currentImgIndex,
            imgs
            
            
            
           
        }
    }
})

</script>

<style>
.display{
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
}

.displayImg{
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>