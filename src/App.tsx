import { useState } from "react";
import Form from "./components/form";

function App() {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  return (
    <div className="px-[4%] pt-8 pb-28">
      <img className="mx-auto mb-11" src="/images/logo-full.svg" alt="" />
      <h1 className="text-neutral-0 text-center text-[1.75rem] leading-[1.1] font-medium">
        Your Journey to Coding Conf 2025 Starts Here!
      </h1>
      <h2 className="mt-8 mb-11 text-center text-xl leading-[1.2] text-neutral-300">
        Secure your spot at next year's biggest coding conference.
      </h2>
      {formSubmitted ? "" : <Form setFormSubmitted={setFormSubmitted}></Form>}
    </div>
  );
}

export default App;
