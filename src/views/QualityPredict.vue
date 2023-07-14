<template>
<div class="back-pc">
  
  <a-form
    layout="inline"
    style="padding: 50px;"
  >
    <a-form-item>
      <a-select
        v-model:value="aera_id"
        show-search
        placeholder="Select or search an aera"
        style="width: 200px"
        :options="options"
        @change="handleChange"
        allowClear
        
      ></a-select>
    </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        @click="handleSearch"
      >
        Search
      </a-button>
    </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        @click="handleReset"
      >
        Reset
      </a-button>
      
    </a-form-item>
  </a-form>
  <a-input placeholder="Region(latitude and longitude)" readonly style="width: 20vw;"></a-input>
 <p>aera1:outline：Total phosphorus Total nitrogen dissolved oxyge</p>
</div>

<Transition>
  
  <div class="bottom-fixed" v-show="show">
    <TabPage/>
  </div>  
</Transition>

</template>
<script lang="ts">
//import type { SelectProps } from 'ant-design-vue';
import { notification } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
import TabPage from './TabPage.vue';
export default defineComponent({
  components:{
    TabPage
  },
  setup() {
    const aera_id = ref('1')
    const show = ref(true);
    
    const options =([
      { value: '1', label: 'TaiHu' },
      { value: '2', label: 'Lake Illinois' },
  
    ]);
    const handleChange = (value: string) => {
      console.log(`selected ${value}`);
      if(value === undefined){
          show.value = false
      }
      else{
        //show.value = true
      }
    };
    const handleSearch = () =>{
      if(aera_id.value=='1' ||aera_id.value=='2' ){
        show.value = true
      }
      else{
        notification.open({
        message: 'Please Select or search an aera',
        description:
          '',
      });
      }
    }
    const handleBlur = () => {
      console.log('blur');
    };
    const handleFocus = () => {
      console.log('focus');
    };
    const handleReset =() =>{
      aera_id.value = ''
      show.value = false
    }
    // const filterOption = (input: string, option: any) => {
    //   return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    // };
    return {
      aera_id,
      handleBlur,
      handleFocus,
      handleChange,
      options,
      show,
     
      handleReset,
      handleSearch,     
    };
  },
});
</script>

<style>
  
</style>