import { useEffect, useState } from "react";

interface FormDataTypes {
  name: string;
  email: string;
  avatar: {
    preview: string;
  };
}

export default function Ticket({ formSubmitted }: { formSubmitted: boolean }) {
  const [formData, setFormData] = useState<FormDataTypes | null>(null);

  useEffect(() => {
    // retrieve formData from sessionStorage to be used for the ticket preview
    const storedData = sessionStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, [formSubmitted]);

  return (
    <div>
      <img src={formData?.avatar.preview} alt="" />
    </div>
  );
}
