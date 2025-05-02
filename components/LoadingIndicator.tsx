import { View, Text } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native"

const LoadingIndicator = () => {
  return (
    <View>
     
     <LottieView
      
      source={require("@/assets/loading.json")}
      autoPlay
      loop={true}
      style={{
        width: 40,
        height: 40,
      }}
     />
    </View>
  )
}

export default LoadingIndicator