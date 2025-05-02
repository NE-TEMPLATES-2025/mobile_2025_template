import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name='onboarding-screens'/>
        <Stack.Screen name='register'/>
        <Stack.Screen name='login'/>
    </Stack>
  )
}

export default Layout