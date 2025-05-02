import { View, KeyboardAvoidingView ,Platform, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { CustomInputProps } from '@/types'


const SearchInput = ({

    containerStyle,
    iconLeft,
    iconRight,
    placeholder,
    secureTextEntry= false,
    
}: CustomInputProps) => {

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" :"height"}
    >
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            <View className={` relative w-full pl-3 py-3 bg-white rounded-[12px] flex flex-row items-center  ${containerStyle} mb-6 shadow-lg`}>
                {iconLeft && 
                <View >{iconLeft}</View>
                }
                <TextInput  
                placeholder={placeholder}
                className='bg-transparent focus:bg-transparent px-3 py-2 w-full h-full text-gray-2 font-semibold'

                />
                {iconRight && 

                <TouchableOpacity 
                className='absolute right-3 h-[38px] w-[38px] p-3 rounded-lg bg-primary items-center justify-center'>
                    {iconRight}
                </TouchableOpacity>
                }
            </View>

        </TouchableWithoutFeedback>



    </KeyboardAvoidingView>
  )
}

export default SearchInput