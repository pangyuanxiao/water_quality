<template>
  <div class="back-pc">
    <div id="container" style="height: 50vh;padding: 10px;"></div>
  </div>
</template>

<script lang="ts">
import { line } from './graph'

import { defineComponent } from 'vue';

export default defineComponent({
  mounted() {
    line();
  },
})

 
  
</script>