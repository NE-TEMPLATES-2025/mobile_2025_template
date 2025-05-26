import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient= new QueryClient();
const Layout = () => {
  return (
     <QueryClientProvider client={queryClient}>
          
    <Stack screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name='(tabs)'/>
    </Stack>
        </QueryClientProvider>
  )
}

export default Layout