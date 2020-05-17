import {
  SET_DECKS,
  ADD_DECK,
  ADD_QUESTION,
  DELETE_DECK,
} from "../actions/decks";

export default function decks(state = {}, action) {
  switch (action.type) {
    case SET_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECK:
      return {
        ...state,
        [action.deck.title]: action.deck,
      };
    case DELETE_DECK:
      return Object.keys(state)
        .filter((key) => action.deckId != key)
        .reduce((newState, key) => {
          return {
            ...newState,
            [key]: state[key],
          };
        }, {});
    case ADD_QUESTION:
      return {
        ...state,
        [action.deckId]: {
          ...state[action.deckId],
          questions: [...state[action.deckId].questions, action.question],
        },
      };
    default:
      return state;
  }
}
