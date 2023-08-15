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
      setSelectedOption("");
    }
    setSelectedOption(""); // Clear selected option for the next question
  };

  const handleRetry = () => {
    setCorrectAnswers(0);
    startNavigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="w-[70vw] p-8 rounded-lg bg-white shadow-lg">
        <div className="flex justify-end items-center p-4">
          <span className="bg-yellow-400 p-2 rounded-xl w-30">
            Time left: {timer}
          </span>
        </div>

        <div className="quiz-container space-y-4">
          {state.currentQuestionIndex < data.length ? (
            <div className="question-card bg-gradient-to-r from-blue-400 to-green-400 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">
                Question {state.currentQuestionIndex + 1}
              </h2>
              <p className="mt-2">
                {data[state.currentQuestionIndex].question}
              </p>
              <form className="mt-4 space-y-2">
                {data[state.currentQuestionIndex].options.map(
                  (option, index) => (
                    <label key={index} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="options"
                        value={option}
                        checked={selectedOption === option}
                        onChange={() => handleOptionSelect(option)}
                      />
                      <span>{option}</span>
                    </label>
                  )
                )}
              </form>
              <button
                onClick={() => handleNextQuestion()}
                disabled={!selectedOption}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Next
              </button>
              <button
                onClick={() => {
                  dispatch({ type: "SKIP" });
                  setTimer(initialState.timer);
                }}
                className="mt-2 ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded"
              >
                Skip
              </button>
            </div>
          ) : (
            <ResultPage correctAnswers={correctAnswers} onRetry={handleRetry} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;
