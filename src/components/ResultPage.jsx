/* eslint-disable react/prop-types */
const ResultPage = ({ correctAnswers, onRetry }) => {
  return (
    <div className="result-container">
      <h2>Quiz Result</h2>
      <p>You answered {correctAnswers} out of 15 questions correctly.</p>
      <button onClick={onRetry}>Retry</button>
    </div>
  );
};

export default ResultPage;
