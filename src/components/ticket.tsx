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
    // https://cssgrid-generator.netlify.app/
    <div className="grid max-h-[161px] w-full grid-cols-[1fr_19%] grid-rows-2 gap-0 bg-[url(/images/pattern-ticket.svg)] bg-cover bg-center bg-no-repeat">
      <div className="col-start-1 col-end-2 row-start-1 row-end-2">
        <img src="/images/logo-full.svg" alt="" />
        <div>Jan 31, 2025 / Austin, Tx</div>
      </div>
      <div className="col-start-1 col-end-2 row-start-2 row-end-3">
        <img src={formData?.avatar.preview} alt="" />
        <div>{formData?.name}</div>
        <div>{formData?.ghUserName}</div>
      </div>
      <div className="col-start-2 col-end-3 row-start-1 row-end-3 grid place-items-center">
        <p className="rotate-90">#01609</p>
      </div>
    </div>
  );
}
