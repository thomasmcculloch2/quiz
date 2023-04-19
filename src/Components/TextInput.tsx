import React from "react";
import { FieldErrors } from "react-hook-form";

interface Props {
  label: string;
  id: string;
  errors?: FieldErrors<{
    email: string;
    nickname: string;
  }>;
}

const TextInput = React.forwardRef<HTMLInputElement, Props>(
  ({ label, id, errors, ...props }, ref) => {
    return (
      <>
        <label
          className={"mb-2 block text-left ml-1 font-medium text-gray-700"}
        >
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          key={id}
          className={`mr-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-500 focus:ring-red-500`}
          {...props}
        />
        <span className="mt-1 text-xs text-red-500">
          {errors &&
            errors[id as keyof typeof errors] &&
            errors[id as keyof typeof errors]?.message}
        </span>
      </>
    );
  }
);

export default TextInput;
