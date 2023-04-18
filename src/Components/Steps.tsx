interface Props {
  currentQuestion: number;
  allQuestions: any;
}

const Steps = ({ currentQuestion, allQuestions }: Props) => (
  <nav aria-label="Progress">
    <ol role="list" className="flex space-x-2 space-y-0">
      {allQuestions.map((step:any) => (
        <li key={step.number} className="flex-1">
          {step.number < currentQuestion + 1 ? (
            <div className="group flex flex-col border-red-700 py-2 hover:border-red-800 border-l-0 border-t-4 pb-0 pl-0 pt-4" />
          ) : step.number === currentQuestion + 1? (
            <div
              className="flex flex-col border-orange-400 py-2 border-l-0 border-t-4 pb-0 pl-0 pt-4"
              aria-current="step"
            />
          ) : (
            <div className="group flex flex-col border-gray-200 py-2 hover:border-gray-300 border-l-0 border-t-4 pb-0 pl-0 pt-4" />
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Steps;
