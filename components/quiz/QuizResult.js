import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function QuizResult(props) {
  const { correctlyAnswered, totalQuestions, restart, goBackToDeck } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Result</Text>
      <Text style={styles.score}>
        {`You answered ${correctlyAnswered} question${
          correctlyAnswered === 1 ? "" : "s"
        } correctly out of ${totalQuestions}!!`}
      </Text>
      <Text style={[styles.score, styles.percentage]}>
        {`That is ${(correctlyAnswered / totalQuestions) * 100}%.`}
      </Text>
      <Text style={[styles.score, styles.subtext]}>
        and you get 💯 for the efforts!!
      </Text>
      <Button title="Start Quiz Over" onPress={() => restart()}></Button>
      <Button title="Go back to deck" onPress={() => goBackToDeck()}></Button>
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
    padding: 10,
    margin: 10,
    fontWeight: "bold",
  },
  percentage: { padding: 5, margin: 5, fontWeight: "normal" },
  subtext: { fontSize: 15, marginBottom: 50 },
});
