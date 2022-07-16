import Constants from 'expo-constants'
import { createTheme } from '@shopify/restyle'
import { StatusBarStyle } from 'expo-status-bar'

import { light } from './Colors'

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
    $white: light.white,
    $black: light.black,

    $primary: light.primary,

    $title: light.blue[500],
    $text: light.purple[500],
    $background: light.primary,
    $transparent: 'transparent',
    $sidebarSeparator: light.overlay[600],
    $sidebarBackground: light.overlay[500],
    $sidebarForeground: light.overlay[600]
  },
  borderRadii: {
    xs: 4,
    sm: 16,
    md: 24,
    lg: 64,
    hg: 128
  },
  statusBar: {
    barStyle: 'auto' as StatusBarStyle
  },
  textVariants: {
    defaults: {
      color: '$text',
      fontSize: 16
    },
    sidebar: {
      color: '$title'
    },
    title: {
      fontSize: 18,
      color: '$title'
    }
  },
  buttonVariants: {
    defaults: {
      padding: 'sm',
      borderRadius: 'xs'
    },
    teste: {}
  }
})

export default theme
export type Theme = typeof theme
