import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import StackNavigator from './StackNavigator'
import FavoritesPage from '../pages/FavoritesPage'


const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='StackNavigator' component={StackNavigator} options={{headerShown: false, title: 'Jobs'}}></Drawer.Screen>
      <Drawer.Screen name='Favorites' component={FavoritesPage}></Drawer.Screen>
    </Drawer.Navigator>
  )
}

export default DrawerNavigator