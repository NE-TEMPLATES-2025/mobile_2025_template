import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bookmark, NotificationSvg, SearchDark, ThreeAllows } from "@/assets/svgs";
import SearchInput from "@/components/SearchInput";
import { Link, router } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import { data } from "@/constants";
import { useAppSelector } from "@/redux/store";
import { logout } from "@/redux/userSlice";
import { useDispatch } from "react-redux";
import { getAllParkings } from "@/app/api/parking";
import { Parking } from "@/types";

const Home = () => {

  const [parkings,setParkings]= useState<Parking[]>([]);
  const dispatch=useDispatch()
  const [isCategorySelected, setIsCategorySelected] = useState(
    data.categories[1].title
  );
  const [selectedFilter, setSelectedFilter] = useState("Graphic Design");

  const handleSelectCategory = (title: string) => {
    setIsCategorySelected(title);
  };
  const handleSelectFilter = (title: string) => {
    setSelectedFilter(title);
  };
  const {user}= useAppSelector((state)=>state.user)

  const handleLogout= ()=>{
   dispatch(logout())
   router.replace("/(onboarding)/login")
  }
  


  const courseFilters = ["All", ...data.categories.map((c) => c.title)];

  const filteredCourses =
    selectedFilter === "All"
      ? data.courses
      : data.courses.filter((c) => c.category === selectedFilter);

    const handleGetParkings = async ()=>{

     const parkings=  await getAllParkings()

     setParkings(parkings);
    }

    useEffect(()=>{
      handleGetParkings()
    },[])

    console.log(parkings)


  return (
    <SafeAreaView className="bg-secondary flex-1">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View className="h-full w-full px-6 pt-6 pb-8">
          <View className="w-full flex flex-row items-center justify-between mb-10">
            <View className=" flex flex-col gap-2">
              <Text className="text-dark text-2xl font-semibold">
                Hi, {user!.firstName}
              </Text>
              <View className="flex flex-col gap-0">
                <Text className="font-semibold text-[13px] text-gray-5">
                  Where do you want to park Today?
                </Text>
                <Text className="font-semibold text-[13px] text-gray-5">
                  Search Below.
                </Text>
              </View>
            </View>

            <TouchableOpacity onPress={handleLogout} className=" h-[40px] w-[40px] items-center justify-center rounded-full border-[2px] border-success p-3">
              <NotificationSvg />
            </TouchableOpacity>
          </View>
          <SearchInput
            iconLeft={<SearchDark />}
            iconRight={<ThreeAllows />}
            placeholder="Search for.."
            containerStyle="mb-10"
            onChangeText={()=>{}}
          />
          <View className="w-full min-h-[180px] overflow-hidden relative mb-6">
            <Image
              className="w-full rounded-3xl object-contain"
              source={require("@/assets/images/home.png")}
            />
            <View className="absolute top-6 left-6 w-full">
              <View className="flex flex-col ">
                <Text className="text-white text-[15px] font-semibold">
                  25% Off*
                </Text>
                <Text className="text-white text-[22px] font-semibold">
                  Today’s Special
                </Text>
              </View>
              <View className="justify-start mt-4 w-[60%]">
                <Text className="text-white text-[14px] font-semibold">
                  Get a Discount for Parking  only Valid for Today.!
                </Text>
              </View>
            </View>
          </View>


<Text className="text-xl font-bold mb-3">Parkings For You</Text>
        

          <ScrollView
           horizontal={true}
           showsHorizontalScrollIndicator={false}
           className="mb-4"

          >
            {courseFilters.map((filter,index)=>(
              <TouchableOpacity 
               key={index}
               onPress={()=>handleSelectFilter(filter)}
               className={`px-6 py-1 max-h-[35px] rounded-full justify-center items-center   ${selectedFilter === filter ? "bg-success": "bg-light-gray-2"} mr-3`}
              >
                <Text className={`font-bold text-[13px] ${selectedFilter === filter ? " text-white": " text-dark"}`}>{filter}</Text>
              </TouchableOpacity>
            ))}

          </ScrollView>

          {/* Courses Cards */}

          <FlatList
          className={`mb-6`}
            data={parkings}
            keyExtractor={(item)=>item.code.toString()}
            renderItem={({item})=>(
              <TouchableOpacity>
              <View className="min-w-[280px] min-h-[240px] bg-white rounded-[20px] mr-4 overflow-hidden shadow-secondary shadow-sm">
                <Image
                  source={require("@/assets/images/course-placeholder.png")}
                  resizeMode="contain"
                />
                <View className=" w-full px-3 py-2">
                  <View className=" flex flex-row justify-between items-center mb-3">
                    <Text className="text-orange-1 font-semibold">{item.parkingName}</Text>
                    <Bookmark/>
                  </View>
                  <Text className="text-dark font-semibold text-[16px] mb-2">{item.code}</Text>
                  <View className="flex flex-row gap-3 items-center ">
                    <Text className="font-bold text-[15px] text-primary">${item.chargingFeePerHour}</Text>
                    <View className="h-[16px] w-[2px] bg-black"/>
                    <View className="h-[16px] w-[2px] bg-black"/>
                    <Text className="text-[12px] font-bold text-dark">{item.availableSpaces} Spaces available</Text>
                  </View>

                </View>

               
              </View>
              </TouchableOpacity>
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
         justifyContent: filteredCourses.length === 1 ? "center" : "flex-start",
        alignItems: filteredCourses.length === 1 ? "center" : "flex-start",
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
