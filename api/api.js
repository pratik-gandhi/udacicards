import { AsyncStorage } from "react-native";

const DECKS_KEY = "UDACICARDS:DECKS";

export const loadDecks = async () => {
  try {
    const decks = await AsyncStorage.getItem(DECKS_KEY);
    if (decks != null) {
      return JSON.parse(decks);
    }
  } catch (err) {
    console.error(`Could not save decks. Error - ${err}`);
  }
  return {};
};

export const saveState = async (state) => {
  try {
    await AsyncStorage.setItem(DECKS_KEY, JSON.stringify(state.decks));
  } catch (err) {
    console.error(`Could not save state. Error - ${err}`);
  }
};
