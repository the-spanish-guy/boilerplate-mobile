import { useCallback } from 'react'
import { TouchableOpacity } from 'react-native'
import { DrawerScreenProps } from '@react-navigation/drawer'

import { Box, Text, Button } from '@app/atoms'
import { HomeDrawerParamList } from '@app/routes'

import FeatherIcon from './Icon'

type Props = {
  handleThemePicker?: () => void
}

const HeaderBar: React.FC<DrawerScreenProps<HomeDrawerParamList> & Props> = ({
  navigation,
  handleThemePicker
}) => {
  const handleSideBar = useCallback(() => {
    navigation.toggleDrawer()
  }, [navigation])

  return (
    <Box
      mt="xxl"
      flexDirection="row"
      alignItems="center"
      m="xl"
      justifyContent="space-between"
    >
      <TouchableOpacity onPress={handleSideBar}>
        <FeatherIcon name="menu" size={22} />
      </TouchableOpacity>
      <Text variant="title">Boilerplate</Text>

      {handleThemePicker ? (
        <Button onPress={handleThemePicker}>
          <FeatherIcon name="more-vertical" size={22} />
        </Button>
      ) : (
        <>
          <Text>{''}</Text>
        </>
      )}
    </Box>
  )
}

export default HeaderBar
