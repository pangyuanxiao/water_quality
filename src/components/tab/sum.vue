<template>

<div style="overflow-y: auto;height: 50vh;">

  
   
    <!-- <a-table :columns="columns" 
    :data-source="table_data" 
    :pagination="pagination"
    
    bordered   > 
    <template #bodyCell="{ column, text }">
    <template v-if="column.dataIndex === 'name'">
    <a>{{ text }}</a>
    </template>
    </template>
    </a-table> -->
        
   
    
</div>
</template>

<script lang="ts">
import { defineComponent, ref} from 'vue';
import {total_data} from '../../data/area1/total'
const table_data = total_data;
const open = ref<boolean>(true);



const columns = [{
    title: 'record_date',
    dataIndex: 'record_date',
  },
  {
    title: 'Chemical oxygen demand',
    dataIndex: 'Chemical oxygen demand',
    customHeaderCell: (column: any) => {
            return {
              onClick: () => {
                console.log(column);
              }
            };
          }
  },
  {
    title: 'dissolved oxygen',
    dataIndex: 'dissolved oxygen',
    
  },
  {
    title: 'Dissolved total organic carbon',
    dataIndex: 'Dissolved total organic carbon',
  },
  {
    title: 'PH',
    dataIndex: 'PH',
  },
  {
    title: 'phosphate',
    dataIndex: 'phosphate',
  },
  {
    title: 'silicate',
    dataIndex: 'silicate',
  },
  {
    title: 'Total nitrogen',
    dataIndex: 'Total nitrogen',
  },
  {
    title: 'Total phosphorus',
    dataIndex: 'Total phosphorus',
  },
]

export default defineComponent({
    setup(){
      
        return{
            table_data,
            columns,
            pagination: {
                pageSize: 10 // 每页显示 5 行数据
            },
           
        }
    }
})

</script>