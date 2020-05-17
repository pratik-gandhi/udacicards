import { AsyncStorage } from "react-native";

const STATE_KEY = "UDACICARDS";
const DECKS_KEY = "UDACICARDS:DECKS";
const LAST_QUIZ_TIME_KEY = "UDACICARDS:LAST_QUIZ_TIME_KEY";

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

export const loadLastQuizTime = async () => {
  try {
    const lastQuizTime = await AsyncStorage.getItem(LAST_QUIZ_TIME_KEY);
    return JSON.stringify(lastQuizTime)
  } catch (err) {
    console.error(`Could not save quizzes. Error - ${err}`);
  }
  return null;
};

export const saveState = async (state) => {
  try {
    await AsyncStorage.setItem(LAST_QUIZ_TIME_KEY, JSON.stringify(state.quizTime));
    await AsyncStorage.setItem(DECKS_KEY, JSON.stringify(state.decks));
  } catch (err) {
    console.error(`Could not save state. Error - ${err}`);
  }
};
