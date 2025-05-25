import { router, Stack, Tabs } from "expo-router";
import React from "react";

import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View } from "react-native-reanimated/lib/typescript/Animated";
import { StyleSheet } from "react-native";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#F67A1F",
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "white",
          borderRadius: 20,
          height: 100,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="parking"
        options={{
          title: "Parking",
          // tabBarIcon: ({color,size})=> <Feather name="clock" size={size} color={color} />
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          // tabBarIcon: ({color,size})=><MaterialCommunityIcons name="account" size={size} color={color} />,
          tabBarStyle: {
            display: "none",
          },
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          // tabBarIcon: ({color,size})=><MaterialCommunityIcons name="account" size={size} color={color} />,
          tabBarStyle: {
            display: "none",
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  cartButton: {
    top: -30,
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#F67A1F",
    shadowColor: "#F67A1F",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    borderWidth: 6,
    borderColor: "white",
  },
  cartText: {
    fontSize: 10,
    color: "#fff",
    marginTop: 2,
  },
});
