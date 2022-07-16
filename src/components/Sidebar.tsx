import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { Box, Text } from '@app/atoms'

// const menuItems = {}

const Sidebar: React.FC<DrawerContentComponentProps> = ({ ...props }) => {
  return (
    <SafeAreaProvider>
      <Box flex={1} bg="$sidebarBackground">
        <SafeAreaView>
          <Box
            alignItems="flex-start"
            pl="md"
            pb="sm"
            mt="xs"
            borderBottomColor="$sidebarSeparator"
            borderBottomWidth={0.4}
          >
            <Text variant="sidebar" m="lg">
              Boilerplate
            </Text>
          </Box>
          <Box alignItems="flex-start" p="lg">
            <TouchableOpacity onPress={() => props.navigation.navigate('Main')}>
              <Text pl="md" variant="sidebar">
                Main Page
              </Text>
            </TouchableOpacity>
          </Box>
          <Box alignItems="flex-start" p="lg">
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Detail')}
            >
              <Text pl="md" variant="sidebar">
                Details Page
              </Text>
            </TouchableOpacity>
          </Box>
        </SafeAreaView>
      </Box>
    </SafeAreaProvider>
  )
}

export default Sidebar
