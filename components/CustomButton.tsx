import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  containerStyle,
  iconRight,
  onPress,
  title,
  textStyle="white",
  
  
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`items-center rounded-full  flex flex-row relative py-3 ${containerStyle}`}
    >
      <Text className={`text-white font-semibold text-lg ${textStyle}`}>
        {title}
      </Text>
      {iconRight && (
        <View
          className="w-[48px] h-[48px] rounded-full bg-white items-center justify-center absolute right-2"        >
          {iconRight}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
