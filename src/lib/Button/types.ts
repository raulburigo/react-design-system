export const variantOptions = ['primary', 'secondary', 'cancel'] as const
type Variant = typeof variantOptions[number]

export const sizeOptions = ['xs', 'sm', 'md', 'lg'] as const
type Size = typeof sizeOptions[number]

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

export type { IButtonProps }
