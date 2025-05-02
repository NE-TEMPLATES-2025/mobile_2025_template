import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React,{useRef, useState} from 'react'
import { data } from '@/constants'
import Swiper from "react-native-swiper"
import { ChevronLeft, ChevronLeftBlue } from '@/assets/svgs'
import { router } from 'expo-router'
import CustomButton from '@/components/CustomButton'
const Onboarding = () => {

  const[activeIndex,setActiveIndex]= useState(0)
  const swiperRef= useRef<Swiper>(null);
  const lastIndex= activeIndex === data.onboarding.length -1;

  return (
    <SafeAreaView className=' w-full h-full bg-secondary py-6'>
      <View className=' flex flex-row justify-end px-6'>
      <TouchableOpacity onPress={()=> router.push("/(onboarding)/login")}>
        <Text className=' text-dark font-semibold text-[16px]'>Skip</Text>
      </TouchableOpacity>

      </View>

      <View className='flex-1'>
      <Swiper 
      ref={swiperRef}
      onIndexChanged={(index)=> setActiveIndex(index)}
      loop={false}
       dotColor='#D5E2F5'
       activeDotColor='#0961F5'
       activeDotStyle={{
        width: 20,
       }}

       paginationStyle={{
        position: "absolute",
        bottom: 20,
        left: 20,
        flexDirection: "row",
        alignItems: "center",
       }}
      >
        {data.onboarding.map((item)=>(
          <View 
          key={item.id}
          className='absolute top-1/2 flex flex-col w-full px-4 items-center'>
            <Text className=' text-dark font-semibold text-2xl mb-3'>{item.title}</Text>
            <Text className=' text-gray-1 font-semibold text-[14px] text-center'>{item.description}</Text>
          </View>
        ))}
      </Swiper>
      {lastIndex ?  
      <CustomButton
      containerStyle='w-[200px] h-[60px]  self-center pl-6 pr-2 bg-primary'
      title='Get Started'
      iconRight={<ChevronLeftBlue/>}
      onPress={()=> router.push("/(onboarding)/login")}
      />
      :
      
      <TouchableOpacity
      className="w-[60px] h-[60px] rounded-full bg-primary items-center justify-center absolute bottom-0 right-20 flex-row"
      onPress={() => swiperRef.current?.scrollBy(1)}
      
    >
      <ChevronLeft />
    </TouchableOpacity>
      }
       
      </View>
     
    </SafeAreaView>
  )
}

export default Onboarding