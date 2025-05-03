import { RefObject } from "react";
import { ButtonProps, TextInput, TextInputProps } from "react-native";


export interface CustomButtonProps extends ButtonProps {
    containerStyle: string;
    iconRight?: any;
    textStyle?: any;
    backgroundColor? : string;
}

export interface OAuthButtonProps extends ButtonProps {
    containerStyle: string;
    iconLeft?: any;
}


export interface CustomInputProps extends TextInputProps {

    iconLeft?: any;
    iconRight?: any;
    placeholder?: string;
    placeholderStyle?: string;
    containerStyle?: string;
    secureTextEntry?: boolean;
    onChangeText: (text:string)=>void
}

export  interface OTPInputProps {
    codes: string[];
    refs: RefObject<TextInput>[];
    errorMessages: string[] | undefined;
    onChangeCode: (text: string, index: number) => void;
  }
