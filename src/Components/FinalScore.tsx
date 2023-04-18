import { ClockIcon, PlayIcon } from "../icons/icons";

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
      <div className="w-full h-32 bg-white shadow-xl rounded-lg grid grid-cols-3">
        <div
            className="grow border rounded-tr-full rounded-br-full rounded-bl-lg rounded-tl-lg bg-cover bg-center bg-no-repeat p-4"
            style={{
            backgroundImage: `url(/meditation.jpg)`,
            }}
        />
        <div className="text-left flex flex-row justify-between p-4 col-span-2 "> 
            <div className="flex flex-col space-y-3 md:ml-4 mt-auto mb-auto">
                <p className="font-bold">Mindfulness techniques</p>
                <div className="flex flex-row text-xs text-gray-500">
                    <ClockIcon/>
                    <p>10 min</p>
                </div>
            </div>
            <button onClick={() => window.open("https://www.youtube.com/watch?v=O-6f5wQXSu8&ab_channel=Goodful", "_blank", "noopener noreferrer")} className="mt-auto _blank mb-auto bg-[#FFECC2] p-1 rounded-lg">
                <PlayIcon />    
            </button> 
        </div>
      </div>
      <div className="w-full h-32 bg-white shadow-xl rounded-lg grid grid-cols-3">
      <div
            className="grow border rounded-tr-full rounded-br-full rounded-bl-lg rounded-tl-lg bg-cover bg-center bg-no-repeat p-4"
            style={{
            backgroundImage: `url(/suport.jpeg)`,
            }}
        />
        <div className="text-left flex flex-row justify-between p-4 col-span-2 "> 
            <div className="flex flex-col space-y-3 md:ml-4 mt-auto mb-auto">
                <p className="font-bold">The importance of support</p>
                <div className="flex flex-row text-xs text-gray-500">
                    <ClockIcon/>
                    <p>2 min</p>
                </div>
            </div>
            <button onClick={() => window.open("https://www.youtube.com/watch?v=O16Cz0dXF_Q&ab_channel=DouglasResearchCentre", "_blank", "noopener noreferrer")} className="mt-auto _blank mb-auto bg-[#FFECC2] p-1 rounded-lg">
                <PlayIcon />    
            </button> 
        </div>
      </div>
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
