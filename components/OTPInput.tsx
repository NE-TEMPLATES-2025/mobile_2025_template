import { View, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native'
import React from 'react'
import { OTPInputProps } from '@/types';


const OTPInput = ({

    codes,
    refs,
    errorMessages,
    onChangeCode
}:OTPInputProps) => {
  return (

      <View className='flex flex-row w-full justify-between mb-14'>
        {codes.map((code,index)=>(
    <KeyboardAvoidingView key={index} behavior={Platform.OS === "ios" ? "padding":"height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <TextInput
              key={index}
              autoComplete='one-time-code'
              enterKeyHint='next'
              className='text-2xl h-[50px] w-[60px] rounded-lg bg-white text-gray-2 px-2 py-1 text-center shadow-lg focus:border-[2px] border-gray-4 '
              keyboardType='numeric'
              inputMode='numeric'
              onChangeText={(text:string)=>onChangeCode(text,index)}
              value={code}
              maxLength={index === 0 ? codes.length : 1}
              ref={refs[index]}
              onKeyPress={({nativeEvent: {key}})=>{
                if(key === "Backspace" && index >0){
                    onChangeCode("",index -1);
                    refs[index -1].current?.focus();
                }
              }}
              secureTextEntry={true}
            />
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
        ))}

      </View>
   
  )
}

export default OTPInput