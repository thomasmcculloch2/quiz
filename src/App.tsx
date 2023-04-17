import React, { useState } from "react";
import usePointsStore from "./stores/points";
import allQuestions from "./Questions";
import FinalScore from "./Components/FinalScore";
import Questionnaire from "./Components/Questionnaire";

const App = () => {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const { score, showScore, setScore, setShowScore } = usePointsStore();

  const handleAnswerOptions = (points: number) => {
    setScore(score + points);

    const handleNextQuestion = currentQuestion + 1;
    if (handleNextQuestion < allQuestions.length) {
      setcurrentQuestion(handleNextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleReset = () => {
    setcurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  return (
    <div className="flex w-full h-screen justify-center items-center bg-gradient-to-r from-violet-800 to-sky-400">
      <div className="bg-slate-100 p-12 rounded-lg shadow-2xl w-full max-w-xl text-center">
        {showScore ? (
          <FinalScore score = {score} handleReset={handleReset}></FinalScore>
        ) : (
          <Questionnaire currentQuestion={currentQuestion} allQuestions={allQuestions} handleAnswerOptions={handleAnswerOptions}></Questionnaire>
        )}
      </div>
    </div>
  );
};

export default App;
