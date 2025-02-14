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
    <div className="grid max-h-[161px] w-full grid-cols-[1fr_15%] grid-rows-2 gap-y-[34px] bg-[url(/images/pattern-ticket.svg)] bg-cover bg-center bg-no-repeat pt-[19px] pr-5 pb-[15px] pl-4">
      <div className="text-neutral-0 col-start-1 col-end-2 row-start-1 row-end-2 flex">
        {/*  */}
        <div className="mr-3 size-7">
          <img src="/images/logo-mark.svg" alt="" />
        </div>
        <div>
          <div className="mb-3 text-xl leading-none font-bold">Coding Conf</div>
          <div className="text-sm leading-none">Jan 31, 2025 / Austin, Tx</div>
        </div>
        {/*  */}
      </div>
      {/*  */}
      <div className="text-neutral-0 col-start-1 col-end-2 row-start-2 row-end-3 flex">
        <div className="mr-3 size-[51px] overflow-hidden rounded-xl">
          <img src="/images/image-avatar.jpg" alt="" />
          {/* <img src={formData?.avatar.preview} alt="" /> */}
        </div>
        <div>
          <div className="mt-[6px] mb-2 text-lg leading-none font-medium">
            {formData?.name}
          </div>
          <div className="text-sm leading-none">{formData?.ghUserName}</div>
        </div>
      </div>
      {/*  */}
      <div className="col-start-2 col-end-3 row-start-1 row-end-3 grid place-items-center">
        <p className="rotate-90">#01609</p>
      </div>
    </div>
  );
}
