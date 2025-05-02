import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


const tabs = [ "About","Curriculum"]

const Tabs = () => {

    const [activeTab, setActiveTab] = useState("About");

  return (
    <View className="w-full bg-light-gray-2 h-[50px]  flex flex-row justify-between items-center p-1">
        {tabs.map((tab)=>(
            <TouchableOpacity
             key={tab}
            className={`flex-grow justify-center h-full items-center  ${activeTab === tab ? "bg-[#F5F9FF]":"bg-transparent"}`}
            onPress={()=>setActiveTab(tab)}
            >
            <Text className="font-semibold text-[15px] text-dark leading-5">{tab}</Text>
            </TouchableOpacity>
        ))}
      
    </View>
  )
}

export default Tabs