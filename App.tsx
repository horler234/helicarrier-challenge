import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import {
  useFonts,
  Urbanist_400Regular,
  Urbanist_500Medium,
  Urbanist_600SemiBold,
  Urbanist_700Bold,
} from "@expo-google-fonts/urbanist";
import AppLoading from "expo-app-loading";
import layout from "@constants/layout";
import { SearchIcon } from "@components/icons/SearchIcon";
import { countries } from "@constants/countries";
import { CategoryCard } from "@components/CategoryCard";
import { useState } from "react";
import { CelebrityCrush } from "@components/CelebrityCrush";
import { groupCrushes } from "@utils/groupCrushes";
import { celebrityCrushes } from "@constants/dummyData";
import moment from "moment";
import { GroupedCrush } from "@utils/types/GroupedCrush";
import { Home } from "@screens/Home";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "https://helicarrier-backend.com/api", // fake backend url
  cache: new InMemoryCache(),
});

export default function App() {
  let [fontsLoaded] = useFonts({
    urbanist: Urbanist_400Regular,
    medium: Urbanist_500Medium,
    semiBold: Urbanist_600SemiBold,
    bold: Urbanist_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <StatusBar hidden />
        <Home />
      </ApolloProvider>
    </SafeAreaProvider>
  );
}
