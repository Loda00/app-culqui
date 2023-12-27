export type typeInput = 'text' | 'password'

export interface IPropsInputComponent {
  label: string;
  id: string;
  disabled: boolean;
  value: string;
  placeholder: string;
  type: typeInput
}