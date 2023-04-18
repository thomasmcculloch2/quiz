import { ClockIcon, PlayIcon } from "../icons/icons";

interface Props {
  title: string;
  duration: number;
  url: string;
  imageUrl: string;
}

const Card = ({
  title,
  duration,
  url,
  imageUrl,
}: Props) => (
    <div className="w-full h-32 bg-white shadow-xl rounded-lg grid grid-cols-3">
    <div
      className="grow border rounded-tr-full rounded-br-full rounded-bl-lg rounded-tl-lg bg-cover bg-center bg-no-repeat p-4"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="text-left flex flex-row justify-between p-4 col-span-2 ">
      <div className="flex flex-col space-y-3 md:ml-4 mt-auto mb-auto">
        <p className="font-bold">{title}</p>
        <div className="flex flex-row text-xs text-gray-500">
          <ClockIcon />
          <p>{duration} min</p>
        </div>
      </div>
      <button
        onClick={() =>
          window.open(
            url,
            "_blank",
            "noopener noreferrer"
          )
        }
        className="mt-auto _blank mb-auto bg-[#FFECC2] p-1 rounded-lg"
      >
        <PlayIcon />
      </button>
    </div>
  </div>
);

export default Card;
