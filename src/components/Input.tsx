import { useFormContext } from "react-hook-form";
import RequiredAlert from "./requiredAlert";

export default function Input({
  label,
  name,
  placeholder,
  pattern,
}: {
  label: string;
  name: string;
  placeholder?: string;
  pattern?: RegExp | undefined;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const validationRule = {
    required: true,
    pattern: pattern,
  };

  return (
    <div>
      <label
        className="text-neutral-0 mb-4 inline-block text-xl leading-none"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="text-neutral-0 w-full rounded-xl border-[2px] border-neutral-500/50 bg-neutral-500/20 px-4 pt-5 pb-4 text-lg backdrop-blur-[3px] transition-colors hover:cursor-pointer hover:bg-neutral-700/85 focus-visible:cursor-text"
        type="text"
        {...register(name, validationRule)}
        placeholder={placeholder}
      />
      {errors[name] && (
        <RequiredAlert
          errorMsg={`Please enter a valid ${label.toLowerCase()}`}
        />
      )}
    </div>
  );
}
