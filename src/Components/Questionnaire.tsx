interface Props {
  currentQuestion: number;
  allQuestions: any;
  handleAnswerOptions: (points: number) => void;
}

const Questionnaire = ({
  currentQuestion,
  allQuestions,
  handleAnswerOptions,
}: Props) => (
  <>
    <div className="text-slate-700 text-xl font-semibold">
      <div className="m-4">
        <span>Question {currentQuestion + 1}</span>/{allQuestions.length}
      </div>
      <div className="m-4">{allQuestions[currentQuestion].text}</div>

      <div className="w-full">
        {allQuestions[currentQuestion].options.map((option:any) => (
          <button
            className="m-2 h-10 ring-2 ring-inset ring-[#D8D8D8] text-base w-full text-left pl-4 rounded-md bg-white hover:ring-purple-600 transition-all duration-200"
            onClick={() => handleAnswerOptions(option.points)}
          >
            {option.answerText}
          </button>
        ))}
      </div>
    </div>
  </>
);

export default Questionnaire;
