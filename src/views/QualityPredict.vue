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
    <a-form-item>
      <Transition>
    <a-input v-model:value="region" 
    placeholder="Region(latitude and longitude)" 
    readonly style="width: 200px;"
    v-show="show"
    ></a-input>
  </Transition>
    </a-form-item>
  </a-form>
 

</div>

<Transition>
  
  <div class="bottom-fixed" v-show="show">
    <TabPage :aera_id ='aera_id'/>
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
    const aera_id = ref('')
    const show = ref(false);
    const region=ref('') 
    const options =([
      { value: '1', label: 'TaiHu' },
      { value: '2', label: 'Lake Illinois' },
  
    ]);
    const handleChange = (value: string) => {
      //console.log(`selected ${value}`);
      show.value = false
      if(value === '1'){
         region.value = '119.85°E~120.6°E/30.93°N~31.53°N'
      }
      else{
        region.value = '87.0°W~87.5°W/41.6°N~42.5°N'
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
      //console.log('blur');
    };
    const handleFocus = () => {
      //console.log('focus');
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
      region 
    };
  },
});
</script>

<style>

</style>