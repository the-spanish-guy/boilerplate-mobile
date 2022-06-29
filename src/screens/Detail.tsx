import { Container, Text } from '@app/atoms'
import HeaderBar from '@app/components/HeaderBar'
import { HomeDrawerParamList, RootStackParamList } from '@app/routes'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Detail'>,
  NativeStackScreenProps<RootStackParamList>
>

const DetailScreen = ({ ...props }: Props) => {
  return (
    <Container>
      <HeaderBar {...props} />
      <Text>Details Screen</Text>
    </Container>
  )
}

export default DetailScreen
