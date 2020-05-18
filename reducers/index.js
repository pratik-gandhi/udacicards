import { combineReducers } from "redux";

import decks from "./decks";
import loading from "./loading"
import toast from "./toast"

export default combineReducers({
  decks,
  loading,
  toast
});
