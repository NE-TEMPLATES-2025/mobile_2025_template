
import { Redirect } from 'expo-router';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import storage from './(onboarding)/storage';
import { loadUserFromStorage } from '@/redux/userSlice';
import { useEffect, useState } from 'react';

export default function HomeScreen() {

  // const[initialized,setInitialized]= useState(false);
  // const dispatch= useAppDispatch();

  const {token,user,isLoading}= useAppSelector((state)=> state.user);

  // const token= storage.getToken();
  // console.log(token)

  // useEffect(()=>{
  //   const init =async()=>{

  //     await dispatch(loadUserFromStorage());
  //     setInitialized(true)
  //   }
  //   init()
  // })
  
  // if(!initialized) return null;



  if(isLoading) return null;

  if(!user) return <Redirect href="/(onboarding)/onboarding-screens"/>

  return   <Redirect href="/(root)/(tabs)/home"/>
}
