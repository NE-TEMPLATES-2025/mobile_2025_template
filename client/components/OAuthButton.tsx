import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { OAuthButtonProps } from '@/types'

const OAuthButton = ({

    title,
    iconLeft,
    containerStyle,
    onPress
}:OAuthButtonProps) => {
  return (
    <TouchableOpacity 
    onPress={onPress}
    className={`bg-transparent pl-6 pr-2 w-full rounded-full h-[60px] mb-4  flex flex-row items-center justify-between ${containerStyle}`}>
        {iconLeft &&
        <TouchableOpacity className='h-[48px] w-[48px] bg-white rounded-full shadow-lg  items-center justify-center'>
            {iconLeft}
        </TouchableOpacity>
        }
        <Text className=' text-gray-1 font-bold text-[16px]  text-start'>{title}</Text>
            



    </TouchableOpacity>
  )
}

export default OAuthButton