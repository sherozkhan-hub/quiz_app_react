import data from "../data";
import { useEffect, useReducer, useState } from "react";
import questionReducer from "../reducers/questionReducer";
import { initialState } from "../reducers/questionReducer";
import ResultPage from "./ResultPage";
import { useNavigate } from "react-router-dom";

const Question = () => {
  const [timer, setTimer] = useState(initialState.timer);
  const [state, dispatch] = useReducer(questionReducer, initialState);
  const [selectedOption, setSelectedOption] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const startNavigate = useNavigate();

  useEffect(() => {
    if (state.currentQuestionIndex < data.length) {
      const countdown = setInterval(() => {
        if (timer > 0) {
          setTimer((prevTimer) => prevTimer - 1);
        } else {
          clearInterval(countdown);
          setTimer(initialState.timer);
          dispatch({ type: "NEXT" });
        }
      }, 1000);

      return () => {
        clearInterval(countdown);
      };
    }
  }, [state.currentQuestionIndex, timer]);

  //   Handling answers
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT" });
    setTimer(initialState.timer);
    if (data[state.currentQuestionIndex].answer === selectedOption) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
      console.log(correctAnswers);
    }
  };

  const handleRetry = () => {
    setCorrectAnswers(0);
    startNavigate("/");
  };

  return (
    <>
      <div>Time left: {timer}</div>
      <div className="quiz-container">
        {state.currentQuestionIndex < data.length ? (
          <div className="question-card">
            <h2>Question {state.currentQuestionIndex + 1}</h2>
            <p>{data[state.currentQuestionIndex].question}</p>
            <form>
              {data[state.currentQuestionIndex].options.map((option, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="options"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionSelect(option)}
                  />
                  {option}
                </label>
              ))}
            </form>
            <button
              onClick={() => handleNextQuestion()}
              disabled={!selectedOption}
            >
              Next
            </button>
            <button
              onClick={() => {
                dispatch({ type: "SKIP" });
                setTimer(initialState.timer);
              }}
            >
              Skip
            </button>
          </div>
        ) : (
          <ResultPage correctAnswers={correctAnswers} onRetry={handleRetry} />
        )}
      </div>
    </>
  );
};

export default Question;
