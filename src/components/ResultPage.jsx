/* eslint-disable react/prop-types */
const ResultPage = ({ correctAnswers, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="result-container p-8 rounded-lg bg-white shadow-lg max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Quiz Result</h2>
        <p className="mb-4">
          You answered {correctAnswers} out of 15 questions correctly.
        </p>
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
