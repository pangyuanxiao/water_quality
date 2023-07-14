<template>
  <div class="back-pc">
  <a-form
    layout="inline"
    style="padding: 50px 50px 0px 50px;"
  >
    <a-form-item label="Type:">
      <a-select
      placeholder="Select Type">

      </a-select>
    </a-form-item>
    <a-form-item label="Area:">
      <a-select
      placeholder="Select  Area">
      </a-select>
    </a-form-item>
    <a-form-item label="Theme:">
      <a-input placeholder="Search Theme"></a-input>
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
    </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
      >
        Publish information
      </a-button>
    </a-form-item>
    

  </a-form>
  <a-table :columns="columns" :data-source="data"  bordered style="padding: 5vw;"  > 
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'">
        <a>{{ text }}</a>
      </template>
    </template>
  </a-table>
  </div>
 
</template>
<script lang="ts">
import { defineComponent } from 'vue';

const columns = [
  {
    title: 'Index',
    dataIndex: 'Index',
  },
  {
    title: 'Date',
    dataIndex: 'Date',
  },
  {
    title: 'Theme',
    dataIndex: 'Theme',
  },
  {
    title: 'Type',
    dataIndex: 'Type',
  },
  {
    title: 'Area',
    dataIndex: 'Area',
  },
  {
    title: 'Describe',
    dataIndex: 'Describe',
  },
  {
    title: 'Contact information',
    dataIndex: 'Contact',
  },
];

const data = [
  {
    key: '1',
    Index: '1',
    Date: '2023/06/20',
    Theme: 'Low oxygen content',
    Type: 'technical support',
    Area: 'Chaohu Lake',
    Describe: 'Low oxy',
    Contact :'+86 152xxxx2828'
    
  },
  
];

export default defineComponent({
  setup() {
    return {
      data,
      columns,
    };
  },
});
</script>
<style>
th.column-money,
td.column-money {
  text-align: right !important;
}
</style>