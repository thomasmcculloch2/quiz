import Button from "./Button";
import TextInput from "./TextInput";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

interface Props {
  setShowContactInfo: (value: boolean) => void;
  setShowScore: (value: boolean) => void;
}

const schema = z.object({
  email: z.string().email("Email must be a valid email").min(1, "This field is required"),
  nickname: z.string(),
});

export type FormSchemaType = z.infer<typeof schema>;

const ContactInfo = ({ setShowContactInfo, setShowScore }: Props) => {

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(schema),
  });

  const handleClick = () => {
    setShowContactInfo(false);
    setShowScore(true);
  };

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    setShowContactInfo(false);
    setShowScore(true);
  };

  return (
    <>
      <div className="text-slate-700 mb-4 text-xl font-semibold">
        Enter your details below to receive your feedback.
      </div>
      <p className="text-sm text-gray-500 mb-7">
        We will provide you with a summary of your outcomes along with
        suggestions and recommendations on how to enhance your drinking
        patterns. Additionally, we will periodically prompt you to revisit and
        review your progress.
      </p>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <TextInput label="Name or Nickname" errors={errors} id="nickname" {...register("nickname")}/>
        <TextInput label="Email *" errors={errors} id="email" {...register("email")}/>
        <Button text="Send me my results"></Button>
      </form>
      <button className="text-sm font-bold text-gray-400 underline mt-4 hover:text-gray-700" onClick={()=>handleClick()}>Omit</button>
    </>
  );
};

export default ContactInfo;
