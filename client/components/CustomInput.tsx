import { View, Text, KeyboardAvoidingView ,Platform, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { CustomInputProps } from '@/types'
import { EyeOpen, EyeSvg } from '@/assets/svgs';


const CustomInput = ({

    containerStyle,
    iconLeft,
    iconRight,
    placeholder,
    secureTextEntry= false,
    onChangeText

    
}: CustomInputProps) => {
    const [isPasswordVisible, setIsPasswordVisible]= useState(!secureTextEntry);

   const handleTogglePasswordVisibibility =()=>{
     setIsPasswordVisible(!isPasswordVisible)
   }

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" :"height"}
    >
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            <View className={`relative w-full pl-3 py-3 bg-white rounded-[12px] flex flex-row items-center  ${containerStyle} mb-6`}>
                {iconLeft && 
                <View >{iconLeft}</View>
                }
                <TextInput  
                placeholder={placeholder}
                secureTextEntry={!isPasswordVisible}
                className='bg-transparent focus:bg-transparent px-3 py-2 w-full h-full text-gray-2 font-semibold'
                onChangeText={onChangeText}

                />

                {iconRight && 

                <TouchableOpacity 
                onPress={handleTogglePasswordVisibibility} 
                className='absolute right-4'>{
                    isPasswordVisible ? iconRight.open : iconRight.close
                }</TouchableOpacity>
                }
            </View>

        </TouchableWithoutFeedback>



    </KeyboardAvoidingView>
  )
}

export default CustomInput