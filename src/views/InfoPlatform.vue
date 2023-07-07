<template>
  <div class="back-pc">
     <div id="container"></div>
  </div>
 
</template>

<script>
import { defineComponent } from 'vue';
import {demo} from './graph'
export default defineComponent({
  mounted() {
     demo();
      //test();
  },
})
</script>

function mounted() {
  throw new Error('Function not implemented.');
}
