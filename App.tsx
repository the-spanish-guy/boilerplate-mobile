import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import Routes from '@app/routes'
import { ThemeProvider } from '@shopify/restyle'
import StatusBar from '@app/components/StatusBar'
import { useAtom } from 'jotai'
import { activeThemeAtom } from '@app/states/theme'

export default function App() {
  const [activeTheme] = useAtom(activeThemeAtom)
  return (
    <NavigationContainer>
      <ThemeProvider theme={activeTheme}>
        <StatusBar />
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  )
}
