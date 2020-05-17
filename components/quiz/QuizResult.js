import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function QuizResult(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Result</Text>
      <Text style={styles.score}>
        {`You answered ${props.correctlyAnswered} question${
          props.correctlyAnswered === 1 ? "" : "s"
        } correctly out of ${props.totalQuestions}!!`}
      </Text>
      <Button title="Start Quiz Over" onPress={() => props.restart()}></Button>
      <Button
        title="Go back to deck"
        onPress={() => props.goBackToDeck()}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "center",
  },
  header: {
    fontSize: 30,
    padding: 20,
    margin: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  score: {
    textAlign: "center",
    fontSize: 20,
    padding: 20,
    margin: 20,
    fontWeight: "bold",
  },
});
