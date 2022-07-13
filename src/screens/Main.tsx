import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import Count from '@app/components/Count'
import { Box, Container, Text } from '@app/atoms'
import HeaderBar from '@app/components/HeaderBar'
import { HomeDrawerParamList, RootStackParamList } from '@app/routes'

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>
>

const MainScreen = ({ ...props }: Props) => {
  return (
    <Container>
      <HeaderBar {...props} />
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text>Hello World!!!</Text>
        <Count />
      </Box>
    </Container>
  )
}

export default MainScreen
