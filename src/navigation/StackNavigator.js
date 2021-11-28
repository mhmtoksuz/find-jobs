import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import JopsPage from '../pages/JopsPage'
import DetailPage from '../pages/DetailPage'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='JopsPage' component={JopsPage}></Stack.Screen>
      <Stack.Screen name='Detail' component={DetailPage}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default StackNavigator