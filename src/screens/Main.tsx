import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

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
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        borderWidth={1}
        borderColor="red"
      >
        <Text>Hello World!!!</Text>
      </Box>
    </Container>
  )
}

export default MainScreen
