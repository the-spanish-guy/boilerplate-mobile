import { Theme } from '@app/themes/Light'
import { useTheme } from '@shopify/restyle'
import * as React from 'react'
import { StatusBar as NativeStatusBar } from 'expo-status-bar'

const StatusBar = () => {
  const theme = useTheme<Theme>()

  return (
    <NativeStatusBar
      animated={true}
      translucent={true}
      backgroundColor={theme.colors.$transparent}
      style={theme.statusBar?.barStyle}
    />
  )
}

export default StatusBar
