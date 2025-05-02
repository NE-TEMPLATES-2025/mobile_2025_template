import { View, Text,ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomInput from '@/components/CustomInput'
import { AppleSvg, ChevronLeftBlue, EyeOpen, EyeSvg, GoogleSvg, MailGray } from '@/assets/svgs'
import { Lock } from '@/assets/svgs'
import Checkbox from 'expo-checkbox';
import { Link, router } from 'expo-router'
import CustomButton from '@/components/CustomButton'


const Login = () => {

  const [isSelected, setIsSelected] =useState(false)
  return (
    <SafeAreaView className=' flex-1 bg-secondary'>

    <ScrollView 
    contentContainerStyle={{
      flexGrow: 1
    }}
    keyboardShouldPersistTaps="handled"
    >

      <View className=' bg-secondary w-full px-6 pt-20 pb-10'>

       <View className='w-full items-center'>
        <Image source={require("../../assets/images/logo.png")}/>
       </View>

       <Text className='mt-12 text-dark font-semibold text-2xl '>Let’s Sign In.!</Text>
       <Text className=' text-gray-1 text-[14px] font-semibold mt-3 mb-12'>Login to Your Account to Continue your Courses</Text>
       
       <CustomInput
         iconLeft={<MailGray/>}
         placeholder='Email '
         placeholderStyle='text-gray-2 font-semibold'
         
       />
       <CustomInput
         iconLeft={<Lock/>}
         placeholder='Password '
         placeholderStyle='text-gray-2 font-semibold'
         iconRight={{close:<EyeSvg/>, open: <EyeOpen/>}}
         multiline={false}
         numberOfLines={1}
         
       />
       <View className=' flex flex-row justify-between items-center mb-6'>
        <View className=' flex flex-row gap-2 items-center'>

        <Checkbox
         value={isSelected}
         onValueChange={setIsSelected}
        />
        <Text className='text-gray-1 font-semibold text-[14px]'>Remember Me</Text>
        </View>
        <Link href="/(auth)/(auth-recovery)/forgot-password" className='text-gray-1 text-[14px] font-semibold'>Forgot Password?</Link>
       </View>



       <CustomButton 
       title='Sign In'
       containerStyle='w-full h-[60px] mb-6 justify-center bg-primary'
       iconRight={<ChevronLeftBlue/>}
       onPress={()=> router.push("/(root)/(tabs)/home")}
       />

       <Text className='text-gray-1 text-[14px] font-semibold mb-6 text-center'>Or Continue With</Text>

       
       <View className=' w-full flex flex-row gap-6  items-center  justify-center mb-10'>
       <TouchableOpacity className='h-[48px] w-[48px] bg-white rounded-full shadow-lg  items-center justify-center'>
            <GoogleSvg/>
        </TouchableOpacity>

        <TouchableOpacity className='h-[48px] w-[48px] bg-white rounded-full shadow-lg  items-center justify-center'>
            <AppleSvg/>
        </TouchableOpacity>

        </View>

        <Text className='font-medium text-[15px] text-gray-1 text-center'>Don’t have an Account? 
          {" "} 
          <Link className='underline text-primary font-bold text-center' href="/(onboarding)/register">SIGN UP</Link>
          </Text>


      </View>


    </ScrollView>
    </SafeAreaView>
  )
}

export default Login