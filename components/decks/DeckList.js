import React, { useRef } from "react";
import { connect } from "react-redux";
import {
  SafeAreaView,
  View,
  Text,
  Platform,
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";
import Deck from "./Deck";
import { common } from "../../styles/common";
import { foregroundTextColor } from "../../styles/theme";
import DeckListHeader from "./DeckListHeader";

const animate = (fadeAnim) => {
  const maxWidth = Dimensions.get("window").width;
  return () => {
    Animated.timing(fadeAnim, {
      toValue: Math.round(maxWidth),
      duration: 500,
    }).start();
  };
};

const DeckList = (props) => {

  const fadeAnim = useRef(new Animated.Value(0)).current;
  React.useEffect(animate(fadeAnim), []);

  const { decks } = props;

  if (!decks || Object.keys(decks).length == 0) {
    return (
      <View style={common.centered}>
        <Text>There are no decks here!</Text>
        <Text>Create one to get started...</Text>
      </View>
    );
  }

  const deckslist = Object.keys(decks).map((key) => decks[key]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        ListHeaderComponent={DeckListHeader}
        style={[styles.list, { width: fadeAnim }]}
        ItemSeparatorComponent={
          Platform.OS !== "android" &&
          (({ highlighted }) => (
            <View
              style={[
                common.separator &&
                  highlighted && { marginLeft: 0 } &&
                  fadeAnim,
              ]}
            />
          ))
        }
        data={deckslist}
        renderItem={({ item, separators }) => (
          <Deck
            deck={item}
            separators={separators}
            navigation={props.navigation}
          />
        )}
        keyExtractor={(deck) => deck.id}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = ({ decks }) => {
  return {
    decks,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: foregroundTextColor,
    justifyContent: "center",
    alignContent: "center",
  },
  list: { flex: 1 },
  listHeader: { alignSelf: "center", fontSize: 24, padding: 20 },
});

export default connect(mapStateToProps)(DeckList);
