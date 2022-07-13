import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigatorScreenParams } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import Sidebar from './components/Sidebar'
import DetailScreen from './screens/Detail'
import MainScreen from './screens/Main'

export type HomeDrawerParamList = {
  Main: {}
  Detail: {}
}

export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeDrawerParamList>
  Detail: NavigatorScreenParams<HomeDrawerParamList>
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const Drawer = createDrawerNavigator<HomeDrawerParamList>()

const Home = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{
        drawerType: 'back',
        swipeEdgeWidth: 200
      }}
      drawerContent={props => <Sidebar {...props} />}
    >
      <Drawer.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  )
}

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
      {/* <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false }}
      /> */}
      {/* Rotas que podem ser acessadas sem a necessidade do drawer */}
    </Stack.Navigator>
  )
}

export default Routes
