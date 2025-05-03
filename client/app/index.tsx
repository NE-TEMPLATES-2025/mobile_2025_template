
import { Redirect } from 'expo-router';
import { useAppSelector } from '@/redux/store';
import storage from './(onboarding)/storage';

export default function HomeScreen() {

  // const {token,user,isLoading}= useAppSelector((state)=> state.user);
  // console.log("User  ",user)
  // console.log("Token",token)
  // if(isLoading) return null;

  const token= storage.getToken();
  console.log(token)

  if(!token) return <Redirect href="/(onboarding)/onboarding-screens"/>


  return   <Redirect href="/(root)/(tabs)/home"/>
}
