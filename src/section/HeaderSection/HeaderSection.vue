<template>
  <div class="bg-black py-6 rounded-b-2xl relative">
    <div v-if="arrow" class="absolute left-4 cursor-pointer" @click="goBack">
      <img :src="Arrow" alt="">
    </div>
    <div class="text-white text-center">
      {{ title }}
    </div>
  </div>
</template>
  
<script setup lang='ts'>
import type { IPropsHeaderSection } from './interfaces';
import Arrow from '@/assets/images/arrow-left.png'

  defineProps<IPropsHeaderSection>()
  
</script>
  
<style>
  
</style>