import { useCallback } from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import FeatherIcon from '@app/components/Icon'
import { Box, Container, Text } from '@app/atoms'
import { HomeDrawerParamList, RootStackParamList } from '@app/routes'

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>
>

const MainScreen = ({ navigation }: Props) => {
  const handleSideBar = useCallback(() => {
    navigation.toggleDrawer()
  }, [navigation])

  return (
    <Container>
      <Box mt="xxl" flexDirection="row" alignItems="center" m="xl">
        <TouchableOpacity onPress={handleSideBar}>
          <FeatherIcon name="menu" size={22} />
        </TouchableOpacity>
        <Box flex={1} alignItems="center">
          <Text variant="title">Boilerplate</Text>
        </Box>
      </Box>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text>Hello World!!!</Text>
      </Box>
    </Container>
  )
}

export default MainScreen
