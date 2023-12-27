<template>
  <div class="flex justify-between items-center py-4 border-b-2 border-gray-300">
    <div class="flex">
      <img :src="icon" alt="" class="w-[30px] h-[30px]" />
      <span class="pl-5 font-bold text-[20px] text-gray-700">{{ product }}</span>
    </div>
    <button @click="clickStar">
      <img v-if="star" :src="IconStarYellow" alt="" >
      <img v-else :src="IconStar" alt="" >
    </button>
  </div>
</template>

<script setup lang='ts'>
  import IconStar from '@/assets/images/star.png';
  import IconStarYellow from '@/assets/images/star-yellow.png'
  import type { IPropsItemListComponent } from './interface';

  defineProps<IPropsItemListComponent>()
</script>
  
<style>
  
</style>