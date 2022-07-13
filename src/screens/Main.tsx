import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import Count from '@app/components/Count'
import { Box, Container, Text } from '@app/atoms'
import HeaderBar from '@app/components/HeaderBar'
import { HomeDrawerParamList, RootStackParamList } from '@app/routes'
import { useCallback, useRef } from 'react'
import ThemePicker from '@app/components/ThemePicker'

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>
>

const MainScreen = ({ ...props }: Props) => {
  const refThemePicker = useRef<ThemePicker>(null)

  const handleMenuToggle = useCallback(() => {
    const { current: menu } = refThemePicker
    if (menu) {
      menu.show()
    }
  }, [])
  return (
    <Container>
      <HeaderBar {...props} handleThemePicker={handleMenuToggle} />
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text>Hello World!!!</Text>
        <Count />
        <ThemePicker ref={refThemePicker} />
      </Box>
    </Container>
  )
}

export default MainScreen
