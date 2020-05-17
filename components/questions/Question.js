import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Question(props) {
  const { question, answerViewEnabled, switchView } = props;

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>{question.question}</Text>
        <View style={styles.showAnswer}>
          <Button
            title={answerViewEnabled ? "Show Question" : "Show Answer"}
            onPress={() => switchView()}
          ></Button>
        </View>
      </View>
      {answerViewEnabled && (
        <View style={styles.answerContainer}>
          <Text style={styles.answerHeader}>Answer</Text>
          <Text style={styles.answer}>{question.answer}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  question: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    padding: 30,
    marginTop: 20,
  },
  questionContainer: { flex: 1 },
  showAnswer: { padding: 10, margin: 10 },
  answerContainer: { flex: 0.75, padding: 20, margin: 20 },
  answerHeader: { textAlign: "center", fontSize: 20, fontWeight: "bold" },
  answer: {
    textAlign: "center",
    fontSize: 15,
    padding: 20,
    marginTop: 20,
  },
});
