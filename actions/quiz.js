export const SET_QUIZ_TIME = "SET_QUIZ_TIME";

export const setQuizTime = (quizTime) => {
  return {
    type: SET_QUIZ_TIME,
    quizTime,
  };
};
