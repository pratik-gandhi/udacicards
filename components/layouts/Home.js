import React from "react";
import { View } from "react-native";

import { common } from "../../styles/common";
import DeckList from "../decks/DeckList";

function Home(props) {
  return (
    <View style={common.centered}>
        <DeckList navigation={props.navigation}/>
    </View>
  );
}

export default Home;
