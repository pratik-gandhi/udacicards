import { SHOW_TOAST } from "../actions/toast";
import { HIDE_TOAST } from "../actions/toast";

export default function toastSHOW_TOAST(state = {}, action) {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        text: action.text,
      };
    case HIDE_TOAST:
      return {
        text: null,
      };
    default:
      return state;
  }
}
