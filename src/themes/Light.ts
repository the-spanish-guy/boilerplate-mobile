import { createTheme } from '@shopify/restyle'
import { StatusBarStyle } from 'expo-status-bar'
import Constants from 'expo-constants'

const palette = {
  purple: '#8C6FF7',

  green: '#56DCBA',

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
    '2xl': Constants.statusBarHeight,
    xxl: 48,
    hg: 128
  },
  breakpoints: {
    phone: 0,
    tablet: 768
  },
  colors: {
    $purple: palette.purple,
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
    },
    title: {
      fontSize: 18,
      color: '$sidebarBackground'
    }
  },
  buttonVariants: {
    defaults: {
      padding: 'sm',
      borderRadius: 4
    },
    teste: {}
  }
})

export default theme
export type Theme = typeof theme
