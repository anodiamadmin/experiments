import React from 'react'
import { View, Text } from 'react-native'

type LabelAnodiamProps = {
    padding: number;
    borderWidth: number;
    borderColor: string;
    textColor:string
  };
  
  const LabelAnodiam = ({ padding, borderWidth, borderColor,textColor }:LabelAnodiamProps) => {
    return (
      <View style={[{ padding, borderWidth, borderColor }]}>
        <Text style={{color:textColor}}>Hi from react native</Text>
      </View>
    );
  };

  export default LabelAnodiam;