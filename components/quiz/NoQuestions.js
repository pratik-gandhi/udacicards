import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import {} from "react-native-paper";

export default function NoQuestions() {
  return (
    <View style={styles.container}>
      <Text style={styles.noquestions}>
        There are no questions in this deck!{" "}
      </Text>
      <Text style={styles.noquestions}> Add some to try out quiz mode...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  noquestions: {
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
