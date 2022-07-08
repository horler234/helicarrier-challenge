import { countries } from "@constants/countries";
import layout from "@constants/layout";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: layout.pixelSizeVertical(16),
    flexDirection: "row",
    alignItems: "center",
  },

  image: { width: 70, height: 70 },

  content: { flex: 1, marginLeft: layout.pixelSizeHorizontal(16) },

  name: {
    fontFamily: "bold",
    fontSize: layout.fontPixel(18),
    color: "#131313",
  },

  country: {
    fontFamily: "semiBold",
    marginBottom: layout.pixelSizeVertical(12),
    color: "#834bff",
  },

  time: {
    fontFamily: "medium",
    fontSize: layout.fontPixel(12),
    color: "#848596",
  },
});

/** CelebrityCrush is the individual component for each celebrity crush
 * @param {string} name name of the celebrity
 * @param {typeof countries[number]} country where the celebrity comes from
 * @param {string} time time user realized the crush on the celebrity
 */

interface ICelebrityCrush {
  name: string;
  time: string;
  country: typeof countries[number];
}

export const CelebrityCrush = ({ name, time, country }: ICelebrityCrush) => (
  <View style={styles.container}>
    <Image
      source={require("@assets/images/placeholder.jpeg")}
      style={styles.image}
    />

    <View style={styles.content}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.country}>{country}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  </View>
);
