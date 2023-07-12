<template>
    <a-row>
        <a-col :span="20">
            <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1" tab="sum">
            <Sum/>
            </a-tab-pane>
            <a-tab-pane key="2" tab="Chemical oxygen demand" >Content of Tab Pane 2</a-tab-pane>
            <a-tab-pane key="3" tab="dissolved oxygen">Content of Tab Pane 3</a-tab-pane>
            <a-tab-pane key="4" tab="Dissolved total organic carbon">Content of Tab Pane 3</a-tab-pane>
            <a-tab-pane key="5" tab="PH">Content of Tab Pane 3</a-tab-pane>
            <a-tab-pane key="6" tab="phosphate">Content of Tab Pane 3</a-tab-pane>
            <a-tab-pane key="7" tab="silicate">Content of Tab Pane 3</a-tab-pane>
            <a-tab-pane key="8" tab="Total nitrogen">Content of Tab Pane 3</a-tab-pane>
            <a-tab-pane key="9" tab="Total phosphorus">Content of Tab Pane 3</a-tab-pane>
        </a-tabs>
        </a-col>
        <a-col :span="4">
            
        </a-col>
    </a-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Sum from '@/components/tab/sum.vue'
export default defineComponent({
    components:{
        Sum
    },
    setup(){
        return{
            activeKey: ref('1'),
        }
    },
})
</script>