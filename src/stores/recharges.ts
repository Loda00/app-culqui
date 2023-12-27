import { defineStore } from 'pinia'
import type { ICompanies } from '@/composables/Recharges/interface'
import { ref, type Ref } from 'vue'

export const useRecharges = defineStore('recharges', () => {
  const companies: Ref<ICompanies[]> = ref([])

  return { companies }
}, { persist: true })