import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name='(tabs)'/>
    </Stack>
  )
}

export default Layout