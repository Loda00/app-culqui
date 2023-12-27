import { defineStore } from 'pinia'
import type { IDataCurrentBalance } from '@/composables/AccountBalance/interface'
import { ref, type Ref } from 'vue'

export const useAccountBalance = defineStore('accountBalance', () => {
  const dataCurrentBalance: Ref<IDataCurrentBalance> = ref({} as IDataCurrentBalance)

  return { dataCurrentBalance }
}, { persist: true })