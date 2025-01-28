import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Define the Colors enumerator
const Colors = {
  RED: "red",
  GREEN: "green",
  BLUE: "blue",
};

// Function to validate the selected color
function validateColor(color) {
  if (!Object.values(Colors).includes(color)) {
    throw new Error(
      `Invalid color selected: "${color}". Please choose a valid color from Colors: ${Object.keys(
        Colors
      ).join(", ")}.`
    );
  }
}

// Programmers can set the color here
const selectedColor = Colors.GREEN; // Change to test validation (e.g., "yellow" will throw an error)

// Validate the selected color
validateColor(selectedColor);

export default function TestEnumerators() {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: selectedColor }]}>
        Test Enumerators!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  label: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
