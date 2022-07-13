import { useCallback } from 'react'
import { TouchableOpacity } from 'react-native'
import { DrawerScreenProps } from '@react-navigation/drawer'

import { Box, Text } from '@app/atoms'
import { HomeDrawerParamList } from '@app/routes'

import FeatherIcon from './Icon'

const HeaderBar: React.FC<DrawerScreenProps<HomeDrawerParamList>> = ({
  navigation
}) => {
  const handleSideBar = useCallback(() => {
    navigation.toggleDrawer()
  }, [navigation])

  return (
    <Box mt="xxl" flexDirection="row" alignItems="center" m="xl">
      <TouchableOpacity onPress={handleSideBar}>
        <FeatherIcon name="menu" size={22} />
      </TouchableOpacity>
      <Box flex={1} alignItems="center">
        <Text variant="title">Boilerplate</Text>
      </Box>
    </Box>
  )
}

export default HeaderBar
