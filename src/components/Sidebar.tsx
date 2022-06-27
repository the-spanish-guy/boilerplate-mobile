import { Box, Text } from '@app/atoms'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const Sidebar: React.FC<DrawerContentComponentProps> = () => {
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
        </SafeAreaView>
      </Box>
    </SafeAreaProvider>
  )
}

export default Sidebar
