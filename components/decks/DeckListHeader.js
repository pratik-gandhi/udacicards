import React from "react";
import { Text, StyleSheet } from "react-native";

export default () => {
  return <Text style={styles.listHeader}>Decks</Text>;
};

const styles = StyleSheet.create({
  listHeader: {
    flex: 1,
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold",
    padding: 20,
  },
});
