import React, { useEffect } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
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
import { useQuery } from "@apollo/client";
import { FETCH_CRUSHES } from "@utils/queries";
import { EmptyCrush } from "@components/EmptyCrush";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: layout.pixelSizeHorizontal(20),
    marginTop: layout.pixelSizeVertical(20),
    marginBottom: layout.pixelSizeVertical(24),
  },

  welcomeText: {
    fontFamily: "semiBold",
    fontSize: layout.fontPixel(24),
    color: "#131313",
    marginBottom: layout.pixelSizeVertical(5),
  },

  username: {
    fontFamily: "semiBold",
    fontSize: layout.fontPixel(18),
    color: "#848596",
  },

  avatar: { width: 30, height: 30, borderRadius: 15 },

  categoriesContainer: {
    paddingHorizontal: layout.pixelSizeHorizontal(20),
  },

  crushesContainer: { paddingHorizontal: layout.pixelSizeHorizontal(20) },

  searchContainer: {
    height: layout.heightPixel(56),
    borderWidth: 1,
    borderColor: "#DEDFE0",
    borderRadius: 30,
    paddingLeft: layout.pixelSizeHorizontal(12),
    flexDirection: "row",
    alignItems: "center",
    marginBottom: layout.pixelSizeVertical(16),
    marginHorizontal: layout.pixelSizeHorizontal(20),
  },

  searchInput: {
    fontFamily: "urbanist",
    fontSize: layout.fontPixel(16),
    padding: layout.pixelSizeHorizontal(15),
    color: "#131313",
    flex: 1,
  },
});

export const Home = () => {
  /** search input value */
  const [search, setSearch] = useState("");

  /** get the height of the controls on the bottom of the phone screen */
  const bottomBarInset = useSafeAreaInsets().bottom;

  /**
   * @todo render skeleton loader while it is loading
   * @todo use live data
   * */
  const { data, loading } = useQuery(FETCH_CRUSHES, {
    fetchPolicy: "cache-and-network",
  });

  const [filter, setFilter] = useState<typeof countries[number] | "All">("All");

  const [crushes, setCrushes] = useState<GroupedCrush[]>([]);

  /** when crushes are filtered by categories */
  useEffect(() => {
    if (filter === "All") {
      if (search.length) {
        /** search by name */
        const searchedCrush = celebrityCrushes.filter((crush) =>
          crush.name.toLowerCase().includes(search.trim().toLowerCase())
        );
        setCrushes(groupCrushes(searchedCrush));
      } else {
        setCrushes(groupCrushes(celebrityCrushes));
      }
    } else {
      /** filter out the crushes with the categories */
      const filteredCrushes = celebrityCrushes.filter(
        (crush) => crush.country === filter
      );
      if (search.length) {
        /** search by name */
        const searchedCrush = filteredCrushes.filter((crush) =>
          crush.name.toLowerCase().includes(search.trim().toLowerCase())
        );
        setCrushes(groupCrushes(searchedCrush));
      } else {
        setCrushes(groupCrushes(filteredCrushes));
      }
    }

    /** i couldn't think of any other property to add to the crush object that user can search for
     * but if there is, here is the code for that feature
     * 
     *  if (search.length) {

        const searchedCrush = celebrityCrushes.filter((crush) =>
          crush.name.toLowerCase().includes(search.trim().toLowerCase()) || crush.property.toLowerCase().includes(search.trim().toLowerCase())
        );
        setCrushes(groupCrushes(searchedCrush));
      } else {
        setCrushes(groupCrushes(celebrityCrushes));
      }
     */
  }, [filter, search]);

  return (
    <ScrollView
      contentContainerStyle={[
        {
          paddingBottom: bottomBarInset + layout.pixelSizeVertical(20),
        },
        !crushes.length && { flex: 1 },
      ]}
    >
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.welcomeText}>Welcome back!</Text>
            <Text style={styles.username}>John Doe</Text>
          </View>

          <View>
            <Image
              source={require("@assets/images/avatar.jpeg")}
              style={styles.avatar}
            />
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.searchContainer}>
        <SearchIcon />
        <TextInput
          placeholder="Search transaction..."
          style={styles.searchInput}
          allowFontScaling={false}
          placeholderTextColor="rgba(117, 117, 117, 0.8)"
          onChangeText={setSearch}
          value={search}
        />
      </View>

      <View>
        <ScrollView
          horizontal
          contentContainerStyle={styles.categoriesContainer}
          showsHorizontalScrollIndicator={false}
        >
          <CategoryCard
            onPress={() => setFilter("All")}
            isActive={filter === "All"}
            category="All"
          />
          {countries.map((country, i) => (
            <CategoryCard
              onPress={() => setFilter(country)}
              isActive={filter === country}
              category={country}
              key={i}
            />
          ))}
        </ScrollView>
      </View>

      {crushes.length ? (
        <View style={styles.crushesContainer}>
          {crushes.map(({ group, children }, i) => (
            <View style={{ marginTop: layout.pixelSizeVertical(24) }} key={i}>
              <Text
                style={{
                  fontFamily: "semiBold",
                  fontSize: layout.fontPixel(16),
                  color: "#848596",
                }}
              >
                {group}
              </Text>

              {children.map(({ name, dateAdded, country }, i) => (
                <CelebrityCrush
                  name={name}
                  country={country}
                  time={moment(dateAdded).format("LT")}
                  key={i}
                />
              ))}
            </View>
          ))}
        </View>
      ) : (
        <EmptyCrush />
      )}
    </ScrollView>
  );
};
