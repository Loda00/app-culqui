import IconHeart from '@/assets/images/heart.png'
import IconStar from '@/assets/images/star.png'
import IconCellPhone from '@/assets/images/cellphone.png'
import IconPlus from '@/assets/images/plus.png'

export interface ITypeRecharges {
  icon: string;
  title: string;
}

export const typeRecharges: ITypeRecharges[] = [
  {
    icon: IconHeart,
    title: 'Todas'
  },
  {
    icon: IconStar,
    title: 'Favoritas'
  },
  {
    icon: IconCellPhone,
    title: 'Telefonía'
  },
  {
    icon: IconPlus,
    title: 'Otros'
  }
]
