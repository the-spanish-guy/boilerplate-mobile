import { Box, Text } from '@app/atoms'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

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
            borderBottomWidth={1}
          >
            <Text variant="sidebar" m="lg">
              Boilerplate
            </Text>
          </Box>
          <Box alignItems="flex-start" p="lg" borderWidth={1}>
            <TouchableHighlight
              onPress={() => props.navigation.navigate('Main')}
            >
              <Text variant="sidebar">Main Page</Text>
            </TouchableHighlight>
          </Box>
          <Box alignItems="flex-start" p="lg" borderWidth={1}>
            <TouchableHighlight
              onPress={() => props.navigation.navigate('Detail')}
            >
              <Text variant="sidebar">Details Page</Text>
            </TouchableHighlight>
          </Box>
        </SafeAreaView>
      </Box>
    </SafeAreaProvider>
  )
}

export default Sidebar
