import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import Routes from '@app/routes'
import { ThemeProvider } from '@shopify/restyle'
import light from '@app/themes/Light'
import StatusBar from '@app/components/StatusBar'

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={light}>
        <StatusBar />
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  )
}
