import { ref, type Ref } from 'vue'
import { HttpGet, redirectTo } from '@/HttpRequest'
import { useRecharges } from '@/stores/recharges'
import type { ICompanies } from './interface'

export const useGetProvidersComposable = () => {
  const storeRecharges = useRecharges()
  const isLoadingProviders: Ref<boolean> = ref(false)
  const errorProviders: Ref<any> = ref(null)

  const getProviders = async () => {
    isLoadingProviders.value = true
    try {
      const response = await HttpGet(`/getProviders`)
      const data: ICompanies[] = response.data.data.companies
      storeRecharges.companies = data
    } catch (error: any) {
      errorProviders.value = error
      if (error.response.status === 401) {
        redirectTo('/notFound')
      }
    } finally {
      isLoadingProviders.value = false
    }
  }

  return {
    getProviders,
    isLoadingProviders,
    errorProviders
  }
}
