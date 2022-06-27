import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import Routes from '@app/routes'
import { ThemeProvider } from '@shopify/restyle'
import light from '@app/themes/Light'

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={light}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  )
}
