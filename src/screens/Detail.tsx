import { useAtomValue } from 'jotai/utils'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import activeThemeId from '@app/states/theme'
import { countAtom } from '@app/states/counter'
import { Box, Container, Text } from '@app/atoms'
import HeaderBar from '@app/components/HeaderBar'
import { HomeDrawerParamList, RootStackParamList } from '@app/routes'

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Detail'>,
  NativeStackScreenProps<RootStackParamList>
>

const DetailScreen = ({ ...props }: Props) => {
  const count = useAtomValue(countAtom)
  const test = useAtomValue(activeThemeId)

  return (
    <Container>
      <HeaderBar {...props} />
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text>Details Screen</Text>
        <Text>Current Count: {count}</Text>
        <Text>Current Theme: {test}</Text>
      </Box>
    </Container>
  )
}

export default DetailScreen
