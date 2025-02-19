import DropZoneField from "./dropzoneField";
import Input from "./Input";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { FormDataTypes } from "../App";

export default function Form({
  setFormSubmitted,
}: {
  setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const methods = useForm<FormDataTypes>();

  const generateRandomNumber = () => {
    // Generate a random 5 digit number
    return Math.floor(Math.random() * 90000);
  };

  const onSubmit: SubmitHandler<FormDataTypes> = (formData) => {
    const data = {
      ...formData,
      ticketNumber: generateRandomNumber(),
    };

    sessionStorage.setItem("formData", JSON.stringify(data));
    setFormSubmitted(true);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="mx-auto max-w-[460px]"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <DropZoneField></DropZoneField>
        <div className="grid gap-y-7">
          <Input label="Full Name" name="fullName"></Input>
          <Input
            label="Email Address"
            name="emailAddress"
            placeholder="example@email.com"
            pattern={/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim}
          ></Input>
          <Input
            label="Github Username"
            name="ghUsername"
            placeholder="@yourusername"
            pattern={/^@/}
          ></Input>
        </div>
        <button
          className="mt-6 w-full cursor-pointer rounded-xl bg-orange-500 pt-5 pb-4 text-xl font-bold text-neutral-900"
          type="submit"
        >
          Generate My Ticket
        </button>
      </form>
    </FormProvider>
  );
}
