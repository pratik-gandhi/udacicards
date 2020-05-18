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

import { generateUID, showConfirmationMessage } from "../../utils/helpers";
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
    showConfirmationMessage(this.props.dispatch, "🎊 Question added", `Question was added to the deck`, 'success')
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
    const isValid = this.isInputValid();
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
          <Text style={[styles.label, ]}>Answer</Text>
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
            disabled={!isValid}
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
    flex: 1,
    alignSelf: 'center',
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  input: {
    flex: 3,
    marginLeft: 20,
    textAlign: "center",
    alignSelf: "center",
    fontSize: 15,
    margin: 5,
    height: 'auto',
    minHeight: 80,
    width: "90%",
    borderColor: "black",
    borderStyle: "dotted",
    borderWidth: 1
  },
  inputGroup: {
    flex: 1,
    padding: 5,
    marginLeft: 20,
    marginTop: 10,
    width: "100%",
    justifyContent: "center",
    alignContent: "flex-start",
  },
  button: {
    flex: 1,
    textAlign: "center",
  },
});

export default connect()(AddCard);
