import { countries } from "@constants/countries";
import layout from "@constants/layout";
import React from "react";
import { View } from "react-native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingVertical: layout.pixelSizeVertical(10),
    paddingHorizontal: layout.pixelSizeHorizontal(20),
    borderColor: "#DEDFE0",
    borderRadius: 20,
    marginRight: layout.pixelSizeHorizontal(20),
  },

  category: { fontFamily: "medium" },
});

/** CategoryCard is the button component for filtering the celebrity crush data
 * @param {boolean} isActive check if it is the current filled category
 * @param {typeof countries[number] | "All"} category category to be filtered by
 * @param {() => void} onPress function fired when the card is pressed
 */

interface ICategoryCard {
  isActive?: boolean;
  category: typeof countries[number] | "All";
  onPress: () => void;
}

export const CategoryCard = ({
  isActive,
  category,
  onPress,
}: ICategoryCard) => (
  <View>
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: isActive ? "#834bff" : "transparent" },
        !isActive && { borderWidth: 1 },
      ]}
    >
      <Text style={[styles.category, { color: isActive ? "#fff" : "#131313" }]}>
        {category}
      </Text>
    </TouchableOpacity>
  </View>
);
