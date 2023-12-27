<template>
  <HeaderSection title="Recargas y pagos" />
  <div class="px-3 pt-6">
    <div class="px-3">
      <div class="flex items-center">
        <span class="font-medium text-gray-700">Saldo virtual</span>
        <img class="h-5 pl-4" :src="IconInformation" alt="information">
      </div>
      <div class="flex items-center">
        <span class="text-3xl font-bold">S/ {{ store.dataCurrentBalance.balanceCommerce }} </span>
        <img class="h-5 pl-4" :src="IconRecharge" alt="information">
      </div>
      <FlagComponent class="mt-3" title="¿Cómo recargar mi saldo virtual?" :on-click-flag="() => {}" :icon="IconHeart" />
      <div class="py-5">
        Código para cargar tu saldo: <span class="text-teal-700 font-medium">{12345678901}</span>
      </div>
    </div>
    <div class="h-[1px] bg-gray-200 mb-4"></div>
    <CardComponent
      v-for="(product, i) in products"
      :icon="product.icon"
      :title="product.title"
      @click="() => click(product)"
      :key="i"
    />
  </div>
</template>

<script setup lang='ts'>

import HeaderSection from '@/section/HeaderSection/HeaderSection.vue'
import FlagComponent from '@/components/FlagComponent/FlagComponent.vue';
import CardComponent from '@/components/CardComponent/CardComponent.vue';
import IconHeart from '@/assets/images/heart.png'
import IconInformation from '@/assets/images/information.png'
import IconRecharge from '@/assets/images/recharge.png'
import { products, type IProducts } from '@/const/accountBalance'
import { useAccountBalance } from '@/stores/accountBalance'
import { useGetCurrentBalanceComposable } from '@/composables/AccountBalance/getBalance'
import router from '@/router';
import { onMounted } from 'vue';

  const store = useAccountBalance()

  const { getBalance } = useGetCurrentBalanceComposable()

  const click = (item: IProducts) => {
    router.push(item.redirect)
  }

  onMounted(() => {
    getBalance()
  })
  
</script>
  
<style>
  
</style>