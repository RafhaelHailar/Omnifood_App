import { Text, View } from "@/components/Themed";
import { Button, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function StoreView() {
  const [search, setSearch] = useState("");
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
      <View style={styles.banner}>
        <View></View>
      </View>
      <View style={styles.slider}>
        <View style={styles.sliderHeader}>
          <Text style={styles.title}>Exclusive Offer</Text>
          <View style={styles.textButton}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>See all</Text>
          </View>
        </View>
        <View style={styles.sliderItems}>
          <View style={{ width: 180 }}>
            <View style={{ height: 120, backgroundColor: "black" }}></View>
            <View style={{ paddingHorizontal: 10, display: "flex", gap: 20 }}>
              <View>
                <Text style={{ fontWeight: "bold" }}>Organic Bananas</Text>
                <Text>7pcs, Priceg</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text>$4.99</Text>
                <View
                  style={{
                    backgroundColor: "green",
                    width: 40,
                    height: 40,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 15,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 30 }}>+</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ width: 180 }}>
            <View style={{ height: 120, backgroundColor: "black" }}></View>
            <View style={{ paddingHorizontal: 10, display: "flex", gap: 20 }}>
              <View>
                <Text style={{ fontWeight: "bold" }}>Organic Bananas</Text>
                <Text>7pcs, Priceg</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text>$4.99</Text>
                <View
                  style={{
                    backgroundColor: "green",
                    width: 40,
                    height: 40,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 15,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 30 }}>+</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ width: 180 }}>
            <View style={{ height: 120, backgroundColor: "black" }}></View>
            <View style={{ paddingHorizontal: 10, display: "flex", gap: 20 }}>
              <View>
                <Text style={{ fontWeight: "bold" }}>Organic Bananas</Text>
                <Text>7pcs, Priceg</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text>$4.99</Text>
                <View
                  style={{
                    backgroundColor: "green",
                    width: 40,
                    height: 40,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 15,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 30 }}>+</Text>
                </View>
              </View>
            </View>
          </View>
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
    gap: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 23,
  },
  searchBarContainer: {
    width: "85%",
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
    fontWeight: "bold",
    color: Colors.gray.medium.text,
  },
  banner: {
    width: "85%",
    height: "20%",
    backgroundColor: "black",
  },
  textButton: {
    backgroundColor: "transparent",
  },
  sliderHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    alignItems: "flex-end",
  },
  slider: {
    display: "flex",
    gap: 20,
  },
  sliderItems: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    overflow: "scroll",
  },
});
