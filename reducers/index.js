import { combineReducers } from "redux";

// import { loadingBarReducer } from "react-redux-loading";

import decks from "./decks";
import quizTime from "./quiz";
import loading from "./loading"
import toast from "./toast"

export default combineReducers({
  decks,
  loading,
  toast,
  quizTime
});
