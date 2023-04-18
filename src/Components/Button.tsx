interface Props {
  text: string;
}

const Button = ({
  text,
}: Props) => (
    <button
        type="submit"
        className={
          "group relative flex w-full items-center justify-center rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50"
        }
      >
       {text}
      </button>
);

export default Button;
