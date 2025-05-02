import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bookmark, NotificationSvg, SearchDark, ThreeAllows } from "@/assets/svgs";
import SearchInput from "@/components/SearchInput";
import { Link, router } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import { data } from "@/constants";

const Home = () => {
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


  const courseFilters = ["All", ...data.categories.map((c) => c.title)];

  const filteredCourses =
    selectedFilter === "All"
      ? data.courses
      : data.courses.filter((c) => c.category === selectedFilter);

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
                Hi, Ronald A. Martin
              </Text>
              <View className="flex flex-col gap-0">
                <Text className="font-semibold text-[13px] text-gray-5">
                  What Would you like to learn Today?
                </Text>
                <Text className="font-semibold text-[13px] text-gray-5">
                  Search Below.
                </Text>
              </View>
            </View>

            <View className=" h-[40px] w-[40px] items-center justify-center rounded-full border-[2px] border-success p-3">
              <NotificationSvg />
            </View>
          </View>
          <SearchInput
            iconLeft={<SearchDark />}
            iconRight={<ThreeAllows />}
            placeholder="Search for.."
            containerStyle="mb-10"
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
                  Get a Discount for Every Course Order only Valid for Today.!
                </Text>
              </View>
            </View>
          </View>

          <View className=" w-full flex flex-row justify-between items-center mb-4">
            <Text className="font-semibold text-dark text-lg">Categories</Text>
            <Link
              href="/(root)/(tabs)/(courses)/categories"
              className="flex flex-row gap-2 items-center "
            >
              <Text className="text-primary text-[12px] uppercase font-semibold">
                SEE ALL
              </Text>
              <Feather
                className=" self-center"
                name="chevron-right"
                size={16}
                color="#0961F5"
              />
            </Link>
          </View>

          <View className=" w-full flex flex-row justify-between items-center mb-10">
            {data.categories.map((category) => (
              <TouchableWithoutFeedback
                key={category.id}
                onPress={() => handleSelectCategory(category.title)}
              >
                <Text
                  className={` font-bold text[15px]  ${
                    isCategorySelected == category.title
                      ? "text-primary"
                      : "text-gray-6"
                  }`}
                >
                  {category.title}
                </Text>
              </TouchableWithoutFeedback>
            ))}
          </View>

          <View className=" w-full flex flex-row justify-between items-center mb-4">
            <Text className="font-semibold text-dark text-lg">
              Popular Courses
            </Text>
            <Link
              href="/(root)/(tabs)/(courses)/popular-courses"
              className="flex flex-row gap-2 items-center "
            >
              <Text className="text-primary text-[12px] uppercase font-semibold">
                SEE ALL
              </Text>
              <Feather
                className=" self-center"
                name="chevron-right"
                size={16}
                color="#0961F5"
              />
            </Link>
          </View>

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
            data={filteredCourses}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item})=>(
              <TouchableOpacity onPress={()=>{
                router.push({
                  pathname: "/courses" + item.id.toString(),
                  params:{
                    id: item.id.toString(),
                    title: item.title,
                    price: item.price,
                    students: item.students,
                    rating: item.rating,
                  }
                })
              }}>
              <View className="min-w-[280px] min-h-[240px] bg-white rounded-[20px] mr-4 overflow-hidden shadow-secondary shadow-sm">
                <Image
                  source={require("@/assets/images/course-placeholder.png")}
                  resizeMode="contain"
                />
                <View className=" w-full px-3 py-2">
                  <View className=" flex flex-row justify-between items-center mb-3">
                    <Text className="text-orange-1 font-semibold">{item.category}</Text>
                    <Bookmark/>
                  </View>
                  <Text className="text-dark font-semibold text-[16px] mb-2">{item.title}</Text>
                  <View className="flex flex-row gap-3 items-center ">
                    <Text className="font-bold text-[15px] text-primary">${item.price}</Text>
                    <View className="h-[16px] w-[2px] bg-black"/>
                    <Text>⭐{item.rating}</Text>
                    <View className="h-[16px] w-[2px] bg-black"/>
                    <Text className="text-[12px] font-bold text-dark">{item.students} Std</Text>
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

<View className=" w-full flex flex-row justify-between items-center mb-4">
            <Text className="font-semibold text-dark text-lg">
            Top Mentor
            </Text>
            <Link
              href="/(root)/(tabs)/(mentors)/mentors"
              className="flex flex-row gap-2 items-center "
            >
              <Text className="text-primary text-[12px] uppercase font-semibold">
                SEE ALL
              </Text>
              <Feather
                className=" self-center"
                name="chevron-right"
                size={16}
                color="#0961F5"
              />
            </Link>
          </View>
          <View className="w-full flex flex-row justify-between">

            {data.topMentors.map((mentor)=>(
              <View key={mentor.name} className="flex flex-col gap-3 items-center">
                {/* Image placeholder */}
                <View className="w-[70px] h-[60px] rounded-[20px] bg-black"></View>
                <Text className=" text-[13px] text-dark font-semibold">{mentor.name}</Text>
              </View>
            ))}
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
