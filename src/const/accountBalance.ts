import IconPhone from '@/assets/images/phone.png'
import IdeaPhone from '@/assets/images/idea.png'
import CalendarPhone from '@/assets/images/calendar.png'

export interface IProducts   {
  title: string;
  icon: string;
  redirect: string;
}

export const products: IProducts[] = [
  {
    title: 'Recargas',
    icon: IconPhone,
    redirect: '/account-balance/recharges'
  },
  {
    title: 'Pago de servicios',
    icon: IdeaPhone,
    redirect: '/service-payment'
  },
  {
    title: 'Historial de ganancias y operaciones',
    icon: CalendarPhone,
    redirect: '/history'
  }
]