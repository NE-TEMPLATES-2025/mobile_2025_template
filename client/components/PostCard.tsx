import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'


export interface Post {
    id:number;
    title:string;
    description:string;
    userId:number;
}

const PostCard = ({id,title,description,userId}:Post) => {
    const [post,setPost]= useState<Post | null>(null)
    // Api Call here 
    useEffect(()=>{
    
        const handleGetPost=async()=>{
    
        }
        handleGetPost();
    },[])

    const handleDeletePost= async (id:number)=>{

    }

    const handleUpdatePost= (id:string,post: Partial<Post>)=>{

    }

    return (
    <View className='bg-white w-full h-auto py-4 px-3 flex gap-4 items-center justify-center'>

  <View className='flex flex-col gap-2'>
    <Text className='text-xl font-semibold'>{title}</Text>
    <Text className='text-sm font-normal leading-6'>{description}</Text>

  </View>
  <View className='w-full flex flex-row justify-end items-center'>
    <View className='flex flex-row gap-3 items-center'>
        <TouchableOpacity onPress={()=>{}} className='w-auto px-4 py-2 bg-blue-600 flex items-center justify-center'>
            <Text className='text-white font-medium text-[16px]'>Edit</Text>
        </TouchableOpacity>
         <TouchableOpacity onPress={()=>handleDeletePost(1)} className='w-auto px-4 py-2 bg-red-400 flex items-center justify-center'>
            <Text className='text-white font-medium text-[16px]'>Delete</Text>
        </TouchableOpacity>
    </View>
  </View>
    </View>
  )
}
export default PostCard