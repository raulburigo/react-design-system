export const variantOptions = ['primary', 'secondary', 'cancel'] as const
type Variant = typeof variantOptions[number]
export const DEFAULT_BUTTON_VARIANT: Variant = 'primary'

export const sizeOptions = ['xs', 'sm', 'md', 'lg'] as const
type Size = typeof sizeOptions[number]
export const DEFAULT_BUTTON_SIZE: Size = 'md'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

export type { IButtonProps }
