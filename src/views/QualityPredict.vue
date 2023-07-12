<template>
<div class="back-pc">
  <a-form
    layout="inline"
    style="padding: 50px;"
  >
    <a-form-item>
      <a-select
        v-model:value="value"
        show-search
        placeholder="Select or search a aera"
        style="width: 200px"
        :options="options"
        :filter-option="filterOption"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        allowClear
        
      ></a-select>
    </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
      >
        Search
      </a-button>
    </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
      >
        Reset
      </a-button>
      <button @click="showTab">Toggle</button>
    </a-form-item>
  </a-form>
  <a-input placeholder="Region(latitude and longitude)" readonly style="width: 20vw;"></a-input>
 
</div>
<Transition>
  <div class="bottom-fixed" v-show="show">
    <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="sum">
      <div style="overflow-y: auto;height: 40vh%;">
      <a-table :columns="columns" 
      :data-source="table_data" 
      :pagination="pagination"
      size="small" bordered   > 
      <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'">
        <a>{{ text }}</a>
      </template>
      </template>
    </a-table>
      </div>

    </a-tab-pane>
    <a-tab-pane key="2" tab="Tab 2" force-render>Content of Tab Pane 2</a-tab-pane>
    <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
  </a-tabs>
  </div>  
</Transition>



</template>
<script lang="ts">
//import type { SelectProps } from 'ant-design-vue';
import {total_data} from '../data/area1/total'
import { defineComponent, ref } from 'vue';
//表格
const table_data = total_data;
const columns = [{
    title: 'record_date',
    dataIndex: 'record_date',
  },
  {
    title: 'Chemical oxygen demand',
    dataIndex: 'Chemical oxygen demand',
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
  setup() {
    const show = ref(true);
    const showTab = () => {
      show.value = !show.value;
      console.log(show)
    };
    const options =([
      { value: 'jack', label: 'Jack' },
      { value: 'lucy', label: 'Lucy' },
      { value: 'tom', label: 'Tom' },
    ]);
    const handleChange = (value: string) => {
      console.log(`selected ${value}`);
    };
    const handleBlur = () => {
      console.log('blur');
    };
    const handleFocus = () => {
      console.log('focus');
    };
    const filterOption = (input: string, option: any) => {
      return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };
    return {
      value: ref<string | undefined>(undefined),
      filterOption,
      handleBlur,
      handleFocus,
      handleChange,
      options,
      show,
      showTab,
      //小卡片
      activeKey: ref('1'),
      table_data,
      columns,
      pagination: {
        pageSize: 5 // 每页显示 5 行数据
      }
    };
  },
});
</script>

<style>
  
</style>