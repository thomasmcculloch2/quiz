import Card from "./Card";

interface Props {
  score: number;
  handleReset: () => void;
}

const FinalScore = ({ score, handleReset }: Props) => (
  <>
    <div className="text-slate-700 mb-4 text-xl font-semibold">
      Your score is {score}
    </div>
    <div className="text-slate-700 mb-4 text-base">
      {score <= 7
        ? "Your score suggests abstinence or drinking below low-risk guidelines."
        : score >= 8 && score <= 15
        ? "Your score suggest drinking in excess, which merits a brief intervetion."
        : score >= 16 && score <= 19
        ? "Your score suggests not only drinking above guidelines but also the experience of alcohol-related harm, which merits a brief intervention and follow up."
        : score >= 20
        ? "Your score suggests but does not diagnose alcohol dependence syndrome, which may require a referral to specialized treatment."
        : ""}
    </div>
    <div className="flex flex-col space-y-6 mb-6 mt-6 justify-center items-center">
        <Card title="Mindfulness techniques" duration={10} imageUrl="/meditation.jpg" url="https://www.youtube.com/watch?v=O-6f5wQXSu8&ab_channel=Goodful"/>
        <Card title="The importance of support" duration={2} imageUrl="/suport.jpeg" url="https://www.youtube.com/watch?v=O16Cz0dXF_Q&ab_channel=DouglasResearchCentre"/>
    </div>
    <button
      className="m-2 h-10 w-24 rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500"
      onClick={() => handleReset()}
    >
      Quiz again!
    </button>
  </>
);

export default FinalScore;
