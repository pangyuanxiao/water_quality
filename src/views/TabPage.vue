<template>
    <a-row>
        <a-col :span="20">
            <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1" tab="sum">
            <Sum/>
            </a-tab-pane>
            <a-tab-pane key="2" tab="Chemical oxygen demand" >
                <img src="../data/area1/1Chemicaloxygendemand.png" alt="" >
            </a-tab-pane>
            <a-tab-pane key="3" tab="dissolved oxygen">
                <img src="../data/area1/2dissolvedoxygen.png" alt="">
            </a-tab-pane>
            <a-tab-pane key="4" tab="Dissolved total organic carbon">
                <img src="../data/area1/3Dissolvedtotalorganiccarbon.png" alt="">
            </a-tab-pane>
            <a-tab-pane key="5" tab="PH">
                <img src="../data/area1/4PH.png" alt="">
            </a-tab-pane>
            <a-tab-pane key="6" tab="phosphate">
                <img src="../data/area1/5Phosphate.png" alt="">
            </a-tab-pane>
            <a-tab-pane key="7" tab="silicate">
                <img src="../data/area1/6Silicate.png" alt="">
            </a-tab-pane>
            <a-tab-pane key="8" tab="Total nitrogen">
                <img src="../data/area1/7Totalnitrogen.png" alt="">
            </a-tab-pane>
            <a-tab-pane key="9" tab="Total phosphorus">
                <img src="../data/area1/8Totalphosphorus.png" alt="">
            </a-tab-pane>
        </a-tabs>
        </a-col>
        <a-col :span="4">
            <div class="my_button">
            <a-button style="width: 100%;">
                <router-link to="/home/QualitySolution">
                    View water quality optimization plan
                </router-link>
            </a-button>
            <a-button style="width: 100%;">
                <router-link to="/home/InfoPlatform">
                    Seek help
                </router-link>   
            </a-button>
            </div>
            
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

<style scoped>
 .my_button{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
 }
</style>