import { useEffect, useState } from "react";

interface FormDataTypes {
  name: string;
  email: string;
  ghUserName: string;
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
      <div>
        <div>
          <img src="/images/logo-full.svg" alt="" />
          <div>Jan 31, 2025 / Austin, Tx</div>
        </div>
        <div>
          <img src={formData?.avatar.preview} alt="" />
          <div>{formData?.name}</div>
          <div>{formData?.ghUserName}</div>
        </div>
      </div>
      <div>#01609</div>
    </div>
  );
}
