import { loadDecks, loadLastQuizTime } from "../api/api";
// import { showLoading, hideLoading } from "react-redux-loading";
import { showLoading, hideLoading } from "./loading";
import { setDecks } from "./decks";
import { setQuizTime } from "./quiz";

export const getInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading());
    return Promise.all([loadDecks(), loadLastQuizTime()]).then((values) => {
      dispatch(setDecks(values[0]));
      dispatch(setQuizTime(values[1]));
      dispatch(hideLoading());
    });
  };
};
