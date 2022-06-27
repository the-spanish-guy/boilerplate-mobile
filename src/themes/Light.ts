import { createTheme } from '@shopify/restyle'
import { StatusBarStyle } from 'expo-status-bar'

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#F0F2F3',

  red: 'red',
  blue: 'blue',
  yellow: 'yellow',
  paper00: '#ffffff',
  paper10: '#f5f5f4',
  paper20: '#e6e6e6',
  paper300: '#767577',
  paper900: '#202020',
  blue70: '#2185d0',
  navy20: '#171a21',
  navy900: '#b9babc'
}

const theme = createTheme({
  spacing: {
    '0': 0,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 48,
    hg: 128
  },
  breakpoints: {
    phone: 0,
    tablet: 768
  },
  colors: {
    white: palette.white,
    black: palette.black,
    red: palette.red,
    blue: palette.blue,
    yellow: palette.yellow,

    $primary: palette.blue70,
    $windowBackground: '#f0f0f0',
    $background: palette.paper10,
    $foreground: palette.paper900,
    $sidebarBackground: palette.navy20,
    $sidebarForeground: palette.navy900,
    $sidebarSeparator: palette.paper00 + '20',
    $headerBarBackground: palette.paper20,
    $transparent: 'transparent'
  },

  statusBar: {
    barStyle: 'auto' as StatusBarStyle
  },
  textVariants: {
    defaults: {
      color: '$foreground',
      fontSize: 16
    },
    sidebar: {
      color: '$sidebarForeground'
    }
  }
})

export default theme
export type Theme = typeof theme
