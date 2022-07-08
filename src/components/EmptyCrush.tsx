import layout from "@constants/layout";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: layout.pixelSizeHorizontal(20),
  },
  text: {
    fontFamily: "bold",
    fontSize: layout.fontPixel(18),
    color: "#131313",
    textAlign: "center",
  },
});

/** EmptyCrush renders when crush array is empty */

export const EmptyCrush = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      No crush meets the requirement. You are too picky!
    </Text>
  </View>
);
