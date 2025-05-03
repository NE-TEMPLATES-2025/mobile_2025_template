import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomInput from '@/components/CustomInput';
import { AppleSvg, CheckSvg, ChevronLeftBlue, EyeOpen, EyeSvg, GoogleSvg, MailGray, Lock } from '@/assets/svgs';
import { Link, router } from 'expo-router';
import CustomButton from '@/components/CustomButton';
import authApi from '../api/auth';

const Register = () => {
  const [signupFailed, setSignupFailed] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleRegister = async () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      alert("All fields are required");
      return;
    }

    const response = await authApi.signup(
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.password
    );


    if (response?.statusText !== "success") {
      setSignupFailed(true);
      return;
    }

    setSignupFailed(false);
    router.push("/(onboarding)/login");
  };

  return (
    <SafeAreaView className="flex-1 bg-secondary">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="bg-secondary w-full px-6 pt-20 pb-10">
          <View className="w-full items-center">
            <Image source={require("../../assets/images/logo.png")} />
          </View>

          <Text className="mt-12 text-dark font-semibold text-2xl">Getting Started.!</Text>
          <Text className="text-gray-1 text-[14px] font-semibold mt-3 mb-12">
            Create an Account to Continue your all courses
          </Text>

          <CustomInput
            value={formData.firstName}
            onChangeText={(text) => setFormData({ ...formData, firstName: text })}
            placeholder="Firstname"
            placeholderStyle="text-gray-2 font-semibold"
          />

          <CustomInput
            value={formData.lastName}
            onChangeText={(text) => setFormData({ ...formData, lastName: text })}
            placeholder="Lastname"
            placeholderStyle="text-gray-2 font-semibold"
          />

          <CustomInput
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            iconLeft={<MailGray />}
            placeholder="Email"
            placeholderStyle="text-gray-2 font-semibold"
            autoCapitalize="none"
          />

          <CustomInput
            value={formData.password}
            onChangeText={(text) => setFormData({ ...formData, password: text })}
            iconLeft={<Lock />}
            placeholder="Password"
            placeholderStyle="text-gray-2 font-semibold"
            iconRight={{ close: <EyeSvg />, open: <EyeOpen /> }}
            autoCapitalize="none"
            multiline={false}
            numberOfLines={1}
            secureTextEntry
          />

          <View className="flex flex-row w-full items-center gap-3 mb-4">
            <CheckSvg />
            <Text className="text-[14px] font-semibold text-gray-1">
              Agree to Terms & Conditions
            </Text>
          </View>

          <CustomButton
            title="Sign Up"
            containerStyle="w-full h-[60px] mb-6 justify-center bg-primary"
            iconRight={<ChevronLeftBlue />}
            onPress={handleRegister}
            textStyle="text-center"
          />

          <Text className="text-gray-1 text-[14px] text-center font-bold mb-6">
            Or Continue With
          </Text>

          <View className="w-full flex flex-row gap-12 items-center justify-center mb-6">
            <TouchableOpacity className="h-[48px] w-[48px] bg-white rounded-full shadow-lg items-center justify-center">
              <GoogleSvg />
            </TouchableOpacity>

            <TouchableOpacity className="h-[48px] w-[48px] bg-white rounded-full shadow-lg items-center justify-center">
              <AppleSvg />
            </TouchableOpacity>
          </View>

          <Text className="font-medium text-[15px] text-gray-1 text-center">
            Already have an Account?{" "}
            <Link className="underline text-primary font-bold text-center" href="/(onboarding)/login">
              SIGN IN
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
