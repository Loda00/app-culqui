<template>
  <div
    class="min-w-max py-2 px-4 rounded-[25px] cursor-pointer border border-gray-300"
    @click="onClickFlag"
  >
    <img class="inline-block pr-2" :src="icon" alt="">
    <span class="text-gray-700 font-medium">{{ title }}</span>
  </div>
</template>

<script setup lang='ts'>
  import type { IPropsFlagComponent } from './interfaces';

  defineProps<IPropsFlagComponent>()
  defineEmits([])

</script>
  
<style>
  
</style>