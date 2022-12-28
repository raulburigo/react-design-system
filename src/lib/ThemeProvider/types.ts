const themeColors = [
  'primary',
  'secondary',
  'primaryText',
  'secondaryText',
] as const

type ThemeColors = typeof themeColors[number]

interface IThemeProps {
  colors: { [key in ThemeColors]?: string }
}

export type { IThemeProps }
