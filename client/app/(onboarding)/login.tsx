import { View, Text,ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomInput from '@/components/CustomInput'
import { AppleSvg, ChevronLeftBlue, EyeOpen, EyeSvg, GoogleSvg, MailGray } from '@/assets/svgs'
import { Lock } from '@/assets/svgs'
import Checkbox from 'expo-checkbox';
import { Link, router } from 'expo-router'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '@/redux/userSlice'

import CustomButton from '@/components/CustomButton'
import authApi from '../api/auth'
import storage from './storage'

const Login = () => {
  const [loginFailed,setLoginFailed]= useState(false);
  const  [formData,setFormData]=useState({
    email:"",
    password:""
  })

  const dispatch= useDispatch();


  const handleLogin= async()=>{
    if(!formData.email || !formData.password) {
      alert("All fields are required")
      return;
    }
    

    
    const response= await  authApi.login(formData.email,formData.password);
    if(response?.statusText !== "success") setLoginFailed(true);
    

    setLoginFailed(false);
    console.log(response.data);
    
    const token = response.data.data.token;
    const user = response.data.data.user;

      await storage.storeToken(token);
      const decodedUser= await storage.getUser();
      console.log(user);
      
      dispatch(loginSuccess({token,user:decodedUser}))
      router.replace("/(root)/(tabs)/home")
    
    
  }
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
         onChangeText={(text)=>setFormData({...formData,email:text})}
         iconLeft={<MailGray/>}
         placeholder='Email '
         placeholderStyle='text-gray-2 font-semibold'
         
       />
       <CustomInput
       onChangeText={(text)=>setFormData({...formData,password:text})}
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
        <Link href="/(onboarding)/login" className='text-gray-1 text-[14px] font-semibold'>Forgot Password?</Link>
       </View>



       <CustomButton 
       title='Sign In'
       containerStyle='w-full h-[60px] mb-6 justify-center bg-primary'
       iconRight={<ChevronLeftBlue/>}
       onPress={handleLogin}
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