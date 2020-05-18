import { SHOW_TOAST } from "../actions/toast";
import { HIDE_TOAST } from "../actions/toast";

export default function toast(state = null, action) {
  switch (action.type) {
    case SHOW_TOAST:
      return action.toast;
    case HIDE_TOAST:
      return null;
    default:
      return state;
  }
}
