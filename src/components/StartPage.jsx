import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/quiz");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="start-container p-8 rounded-lg bg-white shadow-lg max-w-md">
        <h1 className="text-3xl font-semibold mb-4">Welcome to the Quiz App</h1>
        <p className="mb-4">
          This quiz tests your knowledge on various topics. You will be
          presented with a series of multiple-choice questions.
        </p>
        <p className="mb-4">
          Each question has four options, and you have a limited time to answer
          each question.
        </p>
        <p className="mb-4">
          Once you answer a question, you can proceed to the next question or
          skip it.
        </p>
        <p className="mb-4">
          Your final score will be displayed at the end of the quiz. Good luck!
        </p>
        <button
          onClick={handleStart}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default StartPage;
