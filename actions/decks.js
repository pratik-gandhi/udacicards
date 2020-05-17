export const SET_DECKS = "SET_DECKS";
export const ADD_DECK = "ADD_DECK";
export const DELETE_DECK = "DELETE_DECK";
export const ADD_QUESTION = "ADD_QUESTION";

export const setDecks = (decks) => {
  return {
    type: SET_DECKS,
    decks,
  };
};

export const addDeck = (deck) => {
  return {
    type: ADD_DECK,
    deck,
  };
};

export const deleteDeck = (deckId) => {
  return {
    type: DELETE_DECK,
    deckId,
  };
};

export const addQuestion = (deckId, question) => {
  return {
    type: ADD_QUESTION,
    deckId,
    question,
  };
};
