import Input from "./Input";

export default function Form() {
  return (
    <form action="/">
      <Input label="Full Name" type="text" name="fullName"></Input>
      <Input label="Email Address" type="email" name="emailAddress"></Input>
      <Input label="Github Username" type="text" name="ghUsername"></Input>
    </form>
  );
}
