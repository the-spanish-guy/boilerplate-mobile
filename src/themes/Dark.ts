import { createTheme } from '@shopify/restyle'
import { StatusBarStyle } from 'expo-status-bar'

import light, { Theme } from './Light'

const palette = {
  purple: '#3F22AB',

  green: '#0A906E',

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
  navy900: '#b9babc',

  slate00: '#1b1c1d',
  slate10: '#202225',
  slate20: '#292c2f',
  slate30: '#2e3235',
  slate40: '#35393d',
  slate100: '#767577',
  slate900: '#dddddd'
}

export const theme: Theme = createTheme({
  ...light,
  colors: {
    ...light.colors,
    $purple: palette.purple,
    $primary: palette.blue70,
    $secondary: palette.slate00,
    $windowBackground: palette.slate10,
    $background: palette.slate10,
    $foreground: palette.slate900,
    $separator: palette.slate100,
    $navbarBackground: palette.slate20,
    $headerBarBackground: palette.slate40,
    $sidebarBackground: palette.slate30,
    $sidebarForeground: palette.slate900,
    $sidebarSeparator: palette.slate900 + '20'
  },
  statusBar: {
    barStyle: 'light-content' as StatusBarStyle
  },
  textVariants: {
    ...light.textVariants,

    title: {
      fontSize: 18,
      color: 'white'
    }
  }
})

export default theme
