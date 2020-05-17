import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Keyboard,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";

import { generateUID } from "../../utils/helpers";
import { addQuestion } from "../../actions/decks";
import { common } from "../../styles/common";

import KeyboardDismissingView from "../hoc/KeyboardDismissingView";

class AddCard extends React.Component {
  state = {
    question: "",
    answer: "",
  };

  handleSubmit = () => {
    const { question, answer } = this.state;
    this.props.dispatch(
      addQuestion(this.props.route.params.deckId, {
        id: generateUID(),
        question,
        answer,
      })
    );
    this.setState(() => ({
      question: "",
      answer: "",
    }));
  };

  handeChange = (field, value) => {
    this.setState((currentState) => ({
      ...currentState,
      [field]: value,
    }));
  };

  isInputValid = () => {
    const { question, answer } = this.state;
    return (
      question &&
      question.length > 0 &&
      answer &&
      answer.length > 0 &&
      question !== answer
    );
  };

  render() {

    const enableButton = this.isInputValid()
    return (
      <KeyboardDismissingView style={styles.container}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Question</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter question"
            value={this.state.question}
            multiline={true}
            onChangeText={(text) => this.handeChange("question", text)}
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Answer</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter answer"
            value={this.state.answer}
            multiline={true}
            onChangeText={(text) => this.handeChange("answer", text)}
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>
        <View style={styles.container}>
          <Button
            style={styles.button}
            title="Add"
            onPress={this.handleSubmit}
            disabled={!enableButton}
          />
        </View>
      </KeyboardDismissingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...common.container,
    ...common.centered,
    justifyContent: "flex-start",
    padding: 20,
  },
  label: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    fontWeight: "bold",
    margin: 5,
  },
  input: {
    textAlign: "center",
    alignSelf: "center",
    fontSize: 20,
    margin: 5,
    height: 100,
    width: "90%",
  },
  inputGroup: {
    flex: 0.2,
    padding: 10,
    margin: 20,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  button: {
    flex: 0.6,
    textAlign: "center",
  },
});

export default connect()(AddCard);
