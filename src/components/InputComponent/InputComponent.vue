<template>
  <div>
    <label class="" :for="id">{{ label }}</label>
    <div class="relative">
      <input
        class="block w-full bg-gray-200 outline-none rounded-sm p-2 pr-10"
        :id="id"
        :type="type"
        :value="value"
        @input="$emit('clickInput', ($event.target as HTMLInputElement).value)"
        :placeholder="placeholder"
      />
      <img class="absolute right-3 top-2" :src="IconSearch" alt="search">
    </div>
  </div>
</template>

<script setup lang='ts'>
import type { IPropsInputComponent } from './interfaces';
import IconSearch from '@/assets/images/search.png'

  defineProps<IPropsInputComponent>()
  defineEmits(['clickInput'])
</script>
  
<style>
  
</style>