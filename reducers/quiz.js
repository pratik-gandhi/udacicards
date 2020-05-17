import { SET_QUIZ_TIME } from "../actions/quiz";

export default function quizTime(state=null, action) {
  switch (action.type) {
    case SET_QUIZ_TIME:
      return action.quizTime;
    default:
      return state;
  }
}
