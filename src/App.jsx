import StartPage from "./components/StartPage";
import Question from "./components/question";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/quiz" element={<Question />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
