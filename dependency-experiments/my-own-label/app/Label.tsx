import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface LabelProps {
  text: string;
  color?: string;
  fontSize?: number;
  style?: TextStyle;
}

const Label: React.FC<LabelProps> = ({ text, color = '#000', fontSize = 14, style }) => {
  return (
    <Text style={[styles.label, { color, fontSize }, style]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  label: {
    margin: 4,
  },
});

export default Label;