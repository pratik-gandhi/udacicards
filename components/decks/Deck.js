import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { accentColor } from "../../styles/theme"

export default function Deck(props) {
  const { deck, separators, navigation } = props;
  return (
    <TouchableOpacity
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}
      onPress={() =>
        navigation.navigate("DeckDetail", {
          deckId: deck.title,
        })
      }
      style={{ flex: 1, height: 150 }}
    >
      <View style={styles.deck}>
        <Text style={[styles.info, styles.title]}>{deck.title}</Text>
        <Text style={[styles.info, styles.text]}>
          contains {deck.questions.length} questions
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    backgroundColor: accentColor,
    opacity: 70,
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  info: { textAlign: "center", fontSize: 20, flex: 1 },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 15,
    fontStyle: "italic",
  },
});
