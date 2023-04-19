import React, { useState } from "react";
import usePointsStore from "./stores/points";
import allQuestions from "./Questions";
import FinalScore from "./Components/FinalScore";
import Questionnaire from "./Components/Questionnaire";
import ContactInfo from "./Components/ContactInfo";
import StartAudit from "./Components/StartAudit";

const App = () => {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const { score, showScore, setScore, setShowScore, firstStep, setFirstStep } = usePointsStore();
  const [showContactInfo, setShowContactInfo] = useState(false);

  const handleAnswerOptions = (points: number) => {
    setScore(score + points);

    const handleNextQuestion = currentQuestion + 1;
    if (handleNextQuestion < allQuestions.length) {
      setcurrentQuestion(handleNextQuestion);
    } else {
      setShowContactInfo(true);
    }
  };

  const handleReset = () => {
    setcurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setFirstStep(true);
  };

  return (
    <div className="flex p-6 w-full h-screen justify-center items-center bg-gradient-to-r from-red-800 to-orange-400">
      <div className="bg-slate-100 p-8 rounded-lg shadow-2xl w-full max-w-xl text-center">
        <img
          src="/ab-inbev-logo-0.png"
          className="w-80 flex ml-auto mr-auto mb-6"
          alt="Logo"
        />
        {firstStep ? (
          <StartAudit setFirstStep = {setFirstStep}/>
        ) : showScore ? (
          <FinalScore score={score} handleReset={handleReset}></FinalScore>
        ) : showContactInfo ? (
          <ContactInfo
            setShowContactInfo={setShowContactInfo}
            setShowScore={setShowScore}
          />
        ) : (
          <Questionnaire
            currentQuestion={currentQuestion}
            allQuestions={allQuestions}
            handleAnswerOptions={handleAnswerOptions}
          ></Questionnaire>
        )}
      </div>
    </div>
  );
};

export default App;
