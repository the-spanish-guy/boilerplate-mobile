import { createTheme } from '@shopify/restyle'
import { StatusBarStyle } from 'expo-status-bar'

import { dark } from './Colors'
import light, { Theme } from './Light'

export const theme: Theme = createTheme({
  ...light,
  colors: {
    ...light.colors,
    $primary: dark.primary,

    $text: dark.blue[600],
    $title: dark.blue[500],
    $background: dark.primary,
    $transparent: 'transparent',
    $sidebarSeparator: dark.overlay[600],
    $sidebarBackground: dark.overlay[500],
    $sidebarForeground: dark.overlay[600]
  },
  statusBar: {
    barStyle: 'light-content' as StatusBarStyle
  },
  textVariants: {
    ...light.textVariants,

    title: {
      fontSize: 18,
      color: '$title'
    }
  },
  buttonVariants: { ...light.buttonVariants }
})

export default theme
