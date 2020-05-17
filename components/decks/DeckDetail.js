import React from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import { connect } from "react-redux";
import { deleteDeck } from "../../actions/decks";

class DeckDetail extends React.Component {
  delete = (deckId) => {
    this.props.dispatch(deleteDeck(deckId));
  };

  confirmAndDelete = (deckId) => {
    Alert.alert("Delete deck", "Do you really want to this deck?", [
      {
        text: "No",
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => this.delete(deckId),
        style: "destructive",
      },
    ]);
  };

  render() {
    const { route, navigation, decks } = this.props;
    const { deckId } = route.params;
    const deck = decks[deckId];

    if (!deck) {
      navigation.navigate("Home");
      return null
    }

    const questionsCount = deck.questions.length;

    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.title}> {deck.title} </Text>
          <Text style={styles.details}>
            {questionsCount === 0 && "There are no questions in this deck"}
            {questionsCount === 1 && "There is 1 question in this deck"}
            {questionsCount > 1 &&
              `There are ${deck.questions.length} questions in this deck`}
          </Text>
        </View>
        <View style={styles.buttonGroup}>
          <Button
            title="Start Quiz"
            style={styles.button}
            onPress={() =>
              navigation.navigate("Quiz", {
                deckId: deck.title,
              })
            }
          />
          <Button
            title="Add a Question"
            style={styles.button}
            onPress={() =>
              navigation.navigate("AddQuestion", {
                deckId: deck.title,
              })
            }
          />
          <Button
            title="Delete deck"
            onPress={() => this.confirmAndDelete(deck.title)}
            style={styles.button}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: "auto",
    alignSelf: "center",
    alignContent: "center",
    width: "80%",
    maxHeight: "60%",
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20
  },
  details: {
    textAlign: "center",
    fontSize: 20,
    fontStyle: "italic",
    padding: 30
  },
  buttonGroup: {
    flex: 1,
  },
  button: {
    padding: 50,
    marginBottom: 10,
    backgroundColor: "green",
  },
});

const mapStateToProps = ({ decks }, ...props) => {
  return {
    decks,
    ...props,
  };
};

export default connect(mapStateToProps)(DeckDetail);
