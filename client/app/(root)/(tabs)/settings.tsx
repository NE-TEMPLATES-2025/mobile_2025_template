import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import SearchInput from "@/components/SearchInput";
import { SearchDark, ThreeAllows } from "@/assets/svgs";
import { useDebounce } from "@/hooks/useDebounce";
import { useAppSelector } from "@/redux/store";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from '@expo/vector-icons/Feather';
import { Switch } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/userSlice";


const Settings = () => {
  const [searchValue, setSearchValue] = useState("");

  const debouncedValue = useDebounce(2000, searchValue);

  const dispatch = useDispatch();


    const handleLogout = () => {
      router.replace("/(onboarding)/login");
      dispatch(logout());
    };
  
  useEffect(() => {
    setSearchValue(debouncedValue);
  }, [debouncedValue, setSearchValue]);

  const { user } = useAppSelector((state) => state.user);
  return (
    <View className="bg-secondary flex-1">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="w-full h-full px-6 py-10 ">
          <View className="w-full flex gap-6">
            <View className="relative flex flex-row justify-center items-center w-full">
              <Text className="text-2xl font-semibold">Settings</Text>
              <Entypo
                className="absolute left-0"
                name="chevron-left"
                size={30}
                color="black"
              />
            </View>

            <SearchInput
              iconLeft={<SearchDark />}
              iconRight={<ThreeAllows />}
              placeholder="Search for.."
              containerStyle="mb-10"
              value={searchValue}
              onChangeText={setSearchValue}
            />
            <View className="w-full flex gap-2 items-start">
              <Text className="text-xl font-semibold leading-6">Account</Text>

              <View className="bg-white w-full py-3 px-3 rounded-lg flex flex-row justify-between items-center">
                <View className="flex flex-row gap-3 items-center">
                  <Feather name="user" size={24} color="black" />
                  <View className="flex">
                    <Text className="text-xl font-semibold">
                      {user?.firstName}
                    </Text>
                    <Text className="text-gray-600 text-[14px] font-normal">
                      {user?.email}
                    </Text>
                  </View>
                </View>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </View>

            {/* App settings */}
            <View className="w-full flex gap-2 items-start">
              <Text className="text-xl font-semibold leading-6">
                App Settings
              </Text>

              <View className="bg-white w-full py-3 px-3 rounded-lg flex gap-4">
                <View className="flex flex-row gap-3 items-center justify-between">
                  <View className="flex flex-row gap-3">
                    <Ionicons
                      name="notifications-outline"
                      size={24}
                      color="black"
                    />
                    <Text className="text-lg font-medium">Notification</Text>
                  </View>

                  <Entypo name="chevron-right" size={24} color="black" />
                </View>

                <View className="flex flex-row gap-3 items-center justify-between">
                  <View className="flex flex-row gap-3">
                    <MaterialCommunityIcons
                      name="format-text"
                      size={24}
                      color="black"
                    />

                    <Text className="text-lg font-medium">Text Size</Text>
                  </View>

                  <Entypo name="chevron-right" size={24} color="black" />
                </View>

                <View className="flex flex-row gap-3 items-center justify-between">
                  <View className="flex flex-row gap-3">
                   <Feather name="moon" size={24} color="black" />

                    <Text className="text-lg font-medium">Dark Theme</Text>
                  </View>

                  <Switch/>
                </View>
              </View>
            </View>

            {/* Accessibility and Media */}

              <View className="w-full flex gap-2 items-start">
              <Text className="text-xl font-semibold leading-6">
                Accessibility and Media 
              </Text>

              <View className="bg-white w-full py-3 px-3 rounded-lg flex gap-4">
                <View className="flex flex-row gap-3 items-center justify-between">
                  <View className="flex flex-row gap-3">
                    <AntDesign name="download" size={24} color="black" />
                    <Text className="text-lg font-medium">Download Settings</Text>
                  </View>

                  <Entypo name="chevron-right" size={24} color="black" />
                </View>

                <View className="flex flex-row gap-3 items-center justify-between">
                  <View className="flex flex-row gap-3">
                    <Feather name="users" size={24} color="black" />

                    <Text className="text-lg font-medium">Accessibility</Text>
                  </View>

                  <Entypo name="chevron-right" size={24} color="black" />
                </View>

                <View className="flex flex-row gap-3 items-center justify-between">
                  <View className="flex flex-row gap-3">
                   <FontAwesome name="sticky-note-o" size={24} color="black" />

                    <Text className="text-lg font-medium">Language</Text>
                  </View>

                  <Entypo name="chevron-right" size={24} color="black" />
                </View>
              </View>
            </View>

            {/* More info */}

              <View className="w-full flex gap-2 items-start">
              <Text className="text-xl font-semibold leading-6">
                Accessibility and Media 
              </Text>

              <View className="bg-white w-full py-3 px-3 rounded-lg flex gap-4">
                <View className="flex flex-row gap-3 items-center justify-between">
                  <View className="flex flex-row gap-3">
                    <Ionicons name="help-buoy" size={24} color="black" />
                    <Text className="text-lg font-medium">Help</Text>
                  </View>

                  <Entypo name="chevron-right" size={24} color="black" />
                </View>

                <View className="flex flex-row gap-3 items-center justify-between">
                  <View className="flex flex-row gap-3">
                    <AntDesign name="exclamationcircleo" size={24} color="black" />

                    <Text className="text-lg font-medium">About</Text>
                  </View>

                  <Entypo name="chevron-right" size={24} color="black" />
                </View>

                
              </View>
            </View>

            {/* Logout button */}

            
            <TouchableOpacity onPress={handleLogout} className="px-6 py-3 flex  flex-row gap-2 border-[2px] border-black w-1/2 items-center justify-center rounded-lg">
              <AntDesign name="exclamationcircleo" size={24} color="black" />

                <Text className="text-xl font-medium ">Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Settings;
