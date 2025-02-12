import { View,GestureResponderEvent,StyleSheet } from 'react-native'
import LabelAnodiam from "../ui/LabelAnodiam"
import ButtonAnodiam from "../ui/ButtonAnodiam"
import React from 'react'

const ScreenZero = () => {
    const handlePress = (event: GestureResponderEvent) => {
        alert('Button Pressed!');
      };
    return (
        <View>
           <LabelAnodiam padding={30} borderWidth={4} borderColor="red" textColor='blue'/> 
           <ButtonAnodiam title="Submit" onPressButton={handlePress} styles={buttonStyles} />
        </View>
    )
}

// Styles for the button component
const buttonStyles = StyleSheet.create({
    button: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default ScreenZero