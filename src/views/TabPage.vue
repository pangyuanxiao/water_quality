<template>
    <a-row>
       
        <a-col :span="20">
            <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1" tab="sum">
            <div v-if="aera_id==='1'">
                <Sum/>
            </div>
            <div v-if="aera_id==='2'">
                <SumTwo/>
            </div>
            </a-tab-pane>
           
        </a-tabs>
        </a-col>
        <a-col :span="3">
            <div class="my_button">
            <a-button style="width: 100%; margin :10px;" type="primary" >
                <router-link to="/home/QualitySolution">
                    View water quality optimization plan
                </router-link>
            </a-button>
            <a-button style="width: 100%;margin :10px;" type="primary">
                <router-link to="/home/InfoPlatform">
                    Seek help
                </router-link>   
            </a-button>
            </div>
            
        </a-col>
        <a-col :span="1"></a-col>
    </a-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Sum from '@/components/tab/sum.vue'
import SumTwo from '@/components/tab/sumTwo.vue'
export default defineComponent({
    props:{
        aera_id:{
            type:String,
        }
    },
    components:{
        Sum,
        SumTwo
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