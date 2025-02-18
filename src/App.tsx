import { useEffect, useState } from "react";
import Form from "./components/form";
import Ticket from "./components/ticket";
import Headings from "./components/headings";

export interface FormDataTypes {
  fullName: string;
  emailAddress: string;
  ghUsername: string;
  ticketNumber: number;
  avatar: {
    preview: string;
  };
}

function App() {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormDataTypes | null>(null);

  useEffect(() => {
    // retrieve formData from sessionStorage to be used for the ticket preview
    const storedData = sessionStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, [formSubmitted]);

  return (
    <div className="mx-auto px-[4%] pt-8 pb-28 md:max-w-[785px] md:px-0 md:pt-10">
      <img
        className="mx-auto mb-11 md:mb-[62px]"
        src="/images/logo-full.svg"
        alt=""
      />
      <Headings
        name={formData?.fullName}
        email={formData?.emailAddress}
        formSubmitted={formSubmitted}
      />
      {formSubmitted ? (
        <Ticket formData={formData} />
      ) : (
        <Form setFormSubmitted={setFormSubmitted} />
      )}
    </div>
  );
}

export default App;
