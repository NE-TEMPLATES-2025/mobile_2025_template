
import { Redirect } from 'expo-router';
import {useAppSelector } from '@/redux/store';

export default function HomeScreen() {

  // const[initialized,setInitialized]= useState(false);
  // const dispatch= useAppDispatch();

  const {token,user,isLoading}= useAppSelector((state)=> state.user);

  


  if(isLoading) return null;

  if(!user) return <Redirect href="/(onboarding)/onboarding-screens"/>

  return   <Redirect href="/(root)/(tabs)/home"/>
}
