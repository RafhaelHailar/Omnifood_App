import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import StoreView from "@/views/Store";

export default function StoreScreen() {
  return (
    <View style={styles.container}>
      <StoreView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
