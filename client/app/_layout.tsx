import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import "../global.css"

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Jost: require('../assets/fonts/Jost-VariableFont_wght.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
   <Stack screenOptions={{
    headerShown: false
   }}>
    <Stack.Screen name='index'/>
    <Stack.Screen name='(onboarding)'/>
    <Stack.Screen name='(root)'/>
   </Stack>
  );
}
