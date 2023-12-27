import { ref, type Ref } from 'vue'
import { HttpGet } from '@/HttpRequest'
import { useAccountBalance } from '@/stores/accountBalance'
import { redirectTo } from '@/HttpRequest'
import { type IResponseCurrentBalance } from './interface'

export const useGetCurrentBalanceComposable = () => {
  const storeBalance = useAccountBalance()
  const isLoadingBalance: Ref<boolean> = ref(false)
  const errorBalance: Ref<any> = ref(null)

  const getBalance = async () => {
    isLoadingBalance.value = true
    try {
      const response = await HttpGet(`/getActualBalance`)
      const data: IResponseCurrentBalance = response.data.data
      storeBalance.dataCurrentBalance = data
    } catch (error: any) {
      errorBalance.value = error
      if (error.response.status === 401) {
        redirectTo('/notFound')
      }
    } finally {
      isLoadingBalance.value = false
    }
  }

  return {
    getBalance,
    isLoadingBalance,
    errorBalance
  }

}
