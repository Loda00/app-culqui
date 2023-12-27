<template>
  <div class="flex items-center justify-start bg-gray-200 p-4 rounded-lg mb-4" @click="$emit('clickCard')">
    <div class="bg-orange-500 py-1 px-1 rounded-[4px] mr-5">
      <img :src="icon" alt="">
    </div>
    <span class="text-[18px] font-medium">{{ title }}</span>
  </div>
</template>

<script setup lang='ts'>
import type { IPropsCardComponent } from './interface';

  defineProps<IPropsCardComponent>()
  defineEmits(['clickCard'])
  
</script>
  
<style>
  
</style>