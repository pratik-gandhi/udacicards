import { loadDecks } from "../api/api";
import { showLoading, hideLoading } from "./loading";
import { setDecks } from "./decks";

export const getInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading());
    return loadDecks().then((decks) => {
      dispatch(setDecks(decks));
      dispatch(hideLoading());
    });
  };
};
