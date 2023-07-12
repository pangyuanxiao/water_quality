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
    <TabPage/>
  </div>  
</Transition>



</template>
<script lang="ts">
//import type { SelectProps } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
import Sum from '@/components/tab/sum.vue'
import TabPage from './TabPage.vue';
export default defineComponent({
  components:{
    TabPage
  },
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
    };
  },
});
</script>

<style>
  
</style>