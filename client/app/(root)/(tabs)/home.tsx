import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Bookmark,
  NotificationSvg,
  SearchDark,
  ThreeAllows,
} from "@/assets/svgs";
import SearchInput from "@/components/SearchInput";
import { data } from "@/constants";
import { useAppSelector } from "@/redux/store";
import { useDebounce } from "@/hooks/useDebounce";
import {
  useGetAllParkings,
  useGetSearchedParkings,
} from "@/react-query/queriesAndMutations";

const Home = () => {
  const { user } = useAppSelector((state) => state.user);

  const [searchValue, setSearchValue] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const debouncedSearch = useDebounce(500, searchValue);

  const {
    data: allParkings,
    isLoading: isLoadingAll,
    isError: isErrorAll,
  } = useGetAllParkings();

  const {
    data: searchedParkings,
    isLoading: isLoadingSearch,
    isError: isErrorSearch,
  } = useGetSearchedParkings(searchValue);

  

  const parkingFilters = ["All", ...data.categories.map((c) => c.title)];

const isSearching = debouncedSearch.trim().length > 0;
const displayedParkings = isSearching ? searchedParkings ?? [] : allParkings ?? [];

  const handleSelectFilter = (title: string) => {
    setSelectedFilter(title);
  };


  console.log("Searched Parkings",searchedParkings);

useEffect(() => {

  console.log("Debounced Search:", debouncedSearch);
}, [debouncedSearch,searchValue]);


  return (
    <SafeAreaView className="bg-secondary flex-1">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="h-full w-full px-6 pt-6 pb-8">
          {/* Header */}
          <View className="w-full flex-row items-center justify-between mb-10">
            <View className="flex-col gap-2">
              <Text className="text-dark text-2xl font-semibold">
                Hi, {user?.firstName}
              </Text>
              <View className="flex-col gap-0">
                <Text className="font-semibold text-[13px] text-gray-5">
                  Where do you want to park Today?
                </Text>
                <Text className="font-semibold text-[13px] text-gray-5">
                  Search Below.
                </Text>
              </View>
            </View>
            <TouchableOpacity className="h-[40px] w-[40px] items-center justify-center rounded-full border-[2px] border-success p-3">
              <NotificationSvg />
            </TouchableOpacity>
          </View>

          {/* Search */}
          <SearchInput
            iconLeft={<SearchDark />}
            iconRight={<ThreeAllows />}
            placeholder="Search for.."
            containerStyle="mb-10"
            onChangeText={(text)=>setSearchValue(text)}
          />

          {/* Banner */}
          <View className="w-full min-h-[180px] overflow-hidden relative mb-6">
            <Image
              className="w-full rounded-3xl object-contain"
              source={require("@/assets/images/home.png")}
            />
            <View className="absolute top-6 left-6 w-full">
              <Text className="text-white text-[15px] font-semibold">
                25% Off*
              </Text>
              <Text className="text-white text-[22px] font-semibold">
                Today’s Special
              </Text>
              <View className="justify-start mt-4 w-[60%]">
                <Text className="text-white text-[14px] font-semibold">
                  Get a Discount for Parking only Valid for Today!
                </Text>
              </View>
            </View>
          </View>

          {/* Filter Chips */}
          <Text className="text-xl font-bold mb-3">Parkings For You</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mb-4"
          >
            {parkingFilters.map((filter, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleSelectFilter(filter)}
                className={`px-6 py-1 max-h-[35px] rounded-full justify-center items-center mr-3 ${
                  selectedFilter === filter
                    ? "bg-success"
                    : "bg-light-gray-2"
                }`}
              >
                <Text
                  className={`font-bold text-[13px] ${
                    selectedFilter === filter ? "text-white" : "text-dark"
                  }`}
                >
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Parking List */}
          {isLoadingAll || isLoadingSearch ? (
            <Text className="text-center text-gray-500 mt-4">Loading...</Text>
          ) : isErrorAll || isErrorSearch ? (
            <Text className="text-center text-red-500 mt-4">
              Failed to load parkings.
            </Text>
          ) : displayedParkings && displayedParkings.length === 0 ? (
            <Text className="text-center text-gray-500 mt-4">
              No parkings found for "{debouncedSearch}"
            </Text>
          ) : (
            <FlatList
              data={displayedParkings}
              keyExtractor={(item) => item.code.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent:
                  displayedParkings!.length === 1 ? "center" : "flex-start",
              }}
              className="mb-6"
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <View className="min-w-[280px] min-h-[240px] bg-white rounded-[20px] mr-4 overflow-hidden shadow-secondary shadow-sm">
                    <Image
                      source={require("@/assets/images/course-placeholder.png")}
                      resizeMode="contain"
                    />
                    <View className="w-full px-3 py-2">
                      <View className="flex-row justify-between items-center mb-3">
                        <Text className="text-orange-1 font-semibold">
                          {item.parkingName}
                        </Text>
                        <Bookmark />
                      </View>
                      <Text className="text-dark font-semibold text-[16px] mb-2">
                        {item.code}
                      </Text>
                      <View className="flex-row gap-3 items-center">
                        <Text className="font-bold text-[15px] text-primary">
                          ${item.chargingFeePerHour}
                        </Text>
                        <View className="h-[16px] w-[2px] bg-black" />
                        <Text className="text-[12px] font-bold text-dark">
                          {item.availableSpaces} Spaces available
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
