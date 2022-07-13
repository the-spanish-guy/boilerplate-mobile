import Light, { Theme } from './Light'
import Dark from './Dark'
export type ThemeNames = 'light' | 'dark'

export interface LocalTheme {
  id: ThemeNames
  name: string
  theme: Theme
}

export const themes: readonly LocalTheme[] = [
  {
    id: 'light',
    name: 'Light',
    theme: Light
  },
  {
    id: 'dark',
    name: 'Dark',
    theme: Dark
  }
]

export type { Theme }
