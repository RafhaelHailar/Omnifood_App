import { Text, View } from "@/components/Themed";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function StoreView() {
  const [search, setSearch] = useState("hello, friend!");
  const [searching, setSearching] = useState(false);
  const colorScheme = useColorScheme();

  function updateSearch(search: string) {
    setSearch(search);
  }

  return (
    <View style={styles.container}>
      <Text>Omnifood</Text>
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          {!searching && search.length === 0 && (
            <>
              <FontAwesome
                name="search"
                size={18}
                color={Colors[colorScheme ?? "light"].text}
              />
              <Text style={styles.searchBarText}>Search Store</Text>
            </>
          )}
          <TextInput
            style={styles.searchBarInput}
            value={search}
            onFocus={() => setSearching(true)}
            onBlur={() => setSearching(false)}
            onChangeText={updateSearch}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  searchBarContainer: {
    width: "80%",
    position: "relative",
  },
  searchBar: {
    display: "flex",
    width: "100%",
    height: 50,
    backgroundColor: Colors.gray.light.text,
    borderRadius: 15,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    position: "relative",
    gap: 10,
  },
  searchBarInput: {
    position: "absolute",
    paddingHorizontal: 20,
    width: "100%",
  },
  searchBarText: {
    fontSize: 14,
    color: Colors.gray.medium.text,
  },
});
