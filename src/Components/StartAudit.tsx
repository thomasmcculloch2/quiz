import Button from "./Button";

interface Props {
  setFirstStep: (value: boolean) => void;
}

const StartAudit = ({ setFirstStep }: Props) => {
  const handleClick = () => {
    setFirstStep(false);
  };
  return (
    <>
      <div className="text-slate-700 mb-4 text-xl font-semibold">
        Self Evaluation
      </div>
      <p className="text-sm text-gray-500 mb-7">
        Our alcohol self-evaluation utilizes the internationally recognized
        'AUDIT' tool developed by the World Health Organization (WHO) to assess
        the extent of alcohol-related harm, including addiction. By taking this
        assessment, you can determine whether your alcohol consumption is
        putting your health at significant risk.
      </p>
      <Button text="Start Audit" onClick={handleClick}></Button>
    </>
  );
};

export default StartAudit;
