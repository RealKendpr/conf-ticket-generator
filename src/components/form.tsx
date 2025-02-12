import Dropzone from "./dropzone";
import Input from "./Input";

export default function Form({
  setFormSubmitted,
}: {
  setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleSubmit = (formData: FormData) => {
    const formValues = {
      avatar: formData.get("myAvatar"),
      name: formData.get("fullName"),
      email: formData.get("emailAddress"),
      ghUsername: formData.get("ghUsername"),
    };

    sessionStorage.setItem("formData", JSON.stringify(formValues));
    setFormSubmitted(true);
  };

  return (
    <form action={handleSubmit}>
      <Dropzone></Dropzone>
      <div className="grid gap-y-7">
        <Input label="Full Name" type="text" name="fullName"></Input>
        <Input
          label="Email Address"
          type="email"
          name="emailAddress"
          placeholder="example@email.com"
        ></Input>
        <Input
          label="Github Username"
          type="text"
          name="ghUsername"
          placeholder="@yourusername"
        ></Input>
      </div>
      <button
        className="mt-6 w-full cursor-pointer rounded-xl bg-orange-500 pt-5 pb-4 text-xl font-bold text-neutral-900"
        type="submit"
      >
        Generate My Ticket
      </button>
    </form>
  );
}
