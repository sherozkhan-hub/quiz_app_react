import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/quiz");
  };
  return (
    <div className="start-container">
      <h1>Welcome to the Quiz App</h1>
      <p>
        This quiz tests your knowledge on various topics. You will be presented
        with a series of multiple-choice questions.
      </p>
      <p>
        Each question has four options, and you have a limited time to answer
        each question.
      </p>
      <p>
        Once you answer a question, you can proceed to the next question or skip
        it.
      </p>
      <p>
        Your final score will be displayed at the end of the quiz. Good luck!
      </p>
      <button onClick={handleStart}>Start Quiz</button>
    </div>
  );
};

export default StartPage;
