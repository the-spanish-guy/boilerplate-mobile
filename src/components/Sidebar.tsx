import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import FeatherIcon from './Icon'
import { Box, Text } from '@app/atoms'
import { MenuItems } from '@app/types/SidebarType'

const menuItems: MenuItems[] = [
  {
    name: 'Main Page',
    to: 'Main',
    icon: <FeatherIcon name="home" size={20} color="$title" />
  },
  {
    name: 'Detail Page',
    to: 'Detail',
    icon: <FeatherIcon name="layers" size={20} color="$title" />
  }
]

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

          {menuItems.map(item => (
            <TouchableOpacity
              onPress={() => props.navigation.navigate(item.to)}
              key={item.name}
            >
              <Box flexDirection="row" alignItems="center" p="lg">
                <React.Fragment key={item.name}>
                  {item.icon}
                  <Text pl="md" variant="sidebar">
                    {item.name}
                  </Text>
                </React.Fragment>
              </Box>
            </TouchableOpacity>
          ))}
        </SafeAreaView>
      </Box>
    </SafeAreaProvider>
  )
}

export default Sidebar
