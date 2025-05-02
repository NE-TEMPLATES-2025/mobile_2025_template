import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Alert, View, Button, Text } from 'react-native';
import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal';


const PhoneInputComponent = () => {
    const [phoneNumber, setPhoneNumber] = useState('234'); 
    const [countryCode, setCountryCode] = useState('us'); 
    const [selectedCountry, setSelectedCountry] = useState(null); 
    const [countryPickerVisible, setCountryPickerVisible] = useState(false); 
    const phoneInputRef = useRef(null);
  return (
    

      <PhoneInput
      initialCountry={countryCode.toLowerCase()}
      ref={phoneInputRef}
      onChangePhoneNumber={(number)=> setPhoneNumber(number)}
      // onPressFlag={}
      textProps={{placeholder: "( +1 )  724-848-1225"}}
       style={styles.phoneInput}
       
      />
    
  )
}

export default PhoneInputComponent

const styles = StyleSheet.create({
  phoneInput:{
   padding: 12,
   width: '100%',
   height: 60,
   backgroundColor: "white",
   borderRadius: 12
  }
})