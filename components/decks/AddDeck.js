import React from "react";
import { connect } from "react-redux";
import {
  Text,
  TextInput,
  KeyboardAvoidingView,
  Button,
  Keyboard,
  StyleSheet,
} from "react-native";

import { addDeck } from "../../actions/decks";
import { generateUID, showConfirmationMessage } from "../../utils/helpers";
import { common } from "../../styles/common";
import KeyboardDismissingView from "../hoc/KeyboardDismissingView";

class AddDeck extends React.Component {
  state = {
    text: "",
  };

  handleChange = (text) => {
    this.setState(() => ({
      text,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { text } = this.state;
    this.props.dispatch(
      addDeck({
        id: generateUID(),
        title: text,
        questions: [],
      })
    );
    this.setState({
      text: "",
    });
    showConfirmationMessage(this.props.dispatch, "👯 Deck Added", `Deck '${text}' was added`, 'success');
    this.props.navigation.navigate("Home");
  };

  checkIfExists = () => {
    return this.props.decks[this.state.text] !== undefined;
  };

  render() {
    const alreadyExists = this.checkIfExists();
    const { text } = this.state;

    return (
      <KeyboardDismissingView style={styles.container}>
        <KeyboardAvoidingView>
          <Text style={styles.label}>Name for the deck</Text>
          <TextInput
            placeholder="Enter a name for the deck"
            value={text}
            onChangeText={this.handleChange}
            style={styles.input}
            onSubmitEditing={Keyboard.dismiss}
          />
          {alreadyExists && (
            <Text style={styles.error}>Deck '{text}' already exists</Text>
          )}
          <Button
            title="Create Deck"
            style={styles.button}
            accessibilityLabel="Create Deck"
            onPress={this.handleSubmit}
            disabled={alreadyExists || this.state.text === ""}
          />
        </KeyboardAvoidingView>
      </KeyboardDismissingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...common.container,
    ...common.centered
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
  },
  error: { color: "red", fontStyle: "italic", fontSize: 15, textAlign: 'center'},
  input: { height: 100, minWidth: "50%", fontSize: 30},
  button: { height: 100, width: 60, fontSize: 20, fontWeight: "bold"},
});

const mapStateToProps = ({ decks }) => {
  return {
    decks,
  };
};

export default connect(mapStateToProps)(AddDeck);
