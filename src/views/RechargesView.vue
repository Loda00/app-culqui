<template>
  <HeaderSection title="Recargas" :arrow="true" :go-back="goBack" />
  <div class="pt-3 px-4">
    <InputComponent
      :disabled="false" placeholder="eje"
      :type="'text'"
      :value="company"
      id="searchCompany"
      @click-input="(value) => company = value"
      label="Buscar empresa"
    />
    <div class="flex overflow-x-auto gap-3 my-5">
      <FlagComponent
        v-for="(category, i) in typeRecharges"
        :key="i"
        :icon="category.icon"
        :title="category.title"
        :on-click-flag="() => categorySelected(category)"
      />
    </div>
    <ItemListComponent
      v-for="(company, i) in listCompanies"
      :key="i"
      :icon="company.image"
      :product="company.company"
      :star="company.star"
      :click-star="() => addStar(i)"
    />
  </div>
</template>

<script setup lang='ts'>
import router from '@/router';
import HeaderSection from '@/section/HeaderSection/HeaderSection.vue';
import InputComponent from '@/components/InputComponent/InputComponent.vue';
import FlagComponent from '@/components/FlagComponent/FlagComponent.vue';
import ItemListComponent from '@/components/ItemListComponent/ItemListComponent.vue';
import { useGetProvidersComposable } from '@/composables/Recharges/getProviders';
import { useRecharges } from '@/stores/recharges'
import type { ICompanies } from '@/composables/Recharges/interface';
import { typeRecharges, type ITypeRecharges } from '@/const/recharges';
import { watch, reactive, ref, type Ref, onMounted } from 'vue';

  const { getProviders } = useGetProvidersComposable()
  const { companies } = useRecharges()

  const company:Ref<string> = ref('')
  const listCompanies = reactive<ICompanies[]>(companies)

  onMounted(() => {
    getProviders()
  })

  const goBack = () => {
    router.go(-1)
  }

  const addStar = (i: number) => {
    listCompanies[i].star = !listCompanies[i].star
  }
  
  watch(listCompanies, () => {
    console.log('listCompanies ', listCompanies);
  })

  const categorySelected = (category: ITypeRecharges) => {
    console.log('category ', category);
  }

</script>
  
<style>
  
</style>