import React from 'react';
import {View, Alert } from 'react-native';
import ButtonWithStyles  from './ButtonWithStyles';

const Index: React.FC = () => {
  const showAlert = () => {
    Alert.alert('Hello!', 'Button with interface clicked.');
  };
   return (
    <View>
      <ButtonWithStyles label="Press Me" onPress={showAlert} />
    </View>
  );
};

export default Index;