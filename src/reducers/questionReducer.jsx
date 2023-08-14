export const initialState = {
  currentQuestionIndex: 0,
  timer: 20,
};

const questionReducer = (state, action) => {
  switch (action.type) {
    case "NEXT":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        timer: initialState.timer,
      };
    case "SKIP":
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
    default:
      return state;
  }
};

export default questionReducer;
