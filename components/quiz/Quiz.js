import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import QuizResult from "./QuizResult";
import NoQuestions from "./NoQuestions";
import Question from "../questions/Question";
import { Icon } from "react-native-elements";
import { clearLocalNotification, setLocalNotification} from "../../utils/helpers"

class Quiz extends React.Component {
  state = {
    currentQuestion: 0,
    correctlyAnswered: 0,
    answerViewEnabled: false,
  };

  constructor(props) {
    super(props);
    const { route, decks } = this.props;
    this.deckId = route.params.deckId;
    this.deck = decks[this.deckId];
    this.totalQuestions = this.deck.questions.length;
  }

  increment = (correct) => {

    // Quiz is complete
    if (this.state.currentQuestion === this.totalQuestions - 1) {
      clearLocalNotification().then(setLocalNotification)
    }

    this.setState((currentState) => ({
      currentQuestion: currentState.currentQuestion + 1,
      correctlyAnswered: currentState.correctlyAnswered + (correct ? 1 : 0),
      answerViewEnabled: false,
    }));
  };

  restart = () => {
    this.setState(() => ({
      currentQuestion: 0,
      correctlyAnswered: 0,
      answerViewEnabled: false,
    }));
  };

  switchView = () => {
    this.setState((currentState) => ({
      ...currentState,
      answerViewEnabled: !currentState.answerViewEnabled,
    }));
  };

  goBackToDeck = () => {
    const { route, navigation } = this.props;
    const deckId = route.params.deckId;
    navigation.navigate("DeckDetail", {
      deckId: deckId,
    });
  };

  render() {
    if (!this.deck.questions || this.deck.questions.length === 0) {
      return <NoQuestions />;
    }

    const {
      currentQuestion,
      correctlyAnswered,
      answerViewEnabled,
    } = this.state;

    if (currentQuestion >= this.totalQuestions) {
      return (
        <QuizResult
          correctlyAnswered={correctlyAnswered}
          totalQuestions={this.totalQuestions}
          restart={this.restart}
          goBackToDeck={this.goBackToDeck}
        />
      );
    }

    const question = this.deck.questions[currentQuestion];

    return (
      <View style={styles.container}>
        <View style={styles.remainingQuestionsView}>
          <Text style={styles.remainingQuestionsText}>
            Questions remaining : {this.totalQuestions - (currentQuestion + 1)}
          </Text>
        </View>

        <Question
          question={question}
          switchView={this.switchView}
          answerViewEnabled={answerViewEnabled}
        />

        <View style={styles.answerChoices}>
          <TouchableOpacity
            style={styles.choice}
            onPress={() => this.increment(true)}
          >
            <Icon
              reverse
              name="check"
              type="font-awesome"
              size={30}
              color="green"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.choice}
            onPress={() => this.increment(false)}
          >
            <Icon
              reverse
              name="close"
              type="font-awesome"
              size={30}
              backgroundColor="red"
              color="red"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  answerChoices: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
  },
  choice: {
    padding: 20,
  },
  remainingQuestionsView: {
    justifyContent: "center",
    padding: 20,
  },
  remainingQuestionsText: {
    textAlign: "right",
    fontStyle: "italic",
    fontWeight: "bold",
  },
});

const mapStateToProps = ({ decks }) => {
  return {
    decks,
  };
};

export default connect(mapStateToProps)(Quiz);
