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
    <div className="grid max-h-[161px] min-h-[161px] max-w-[345px] min-w-[345px] grid-cols-[1fr_15%] grid-rows-2 gap-y-[34px] overflow-scroll bg-[url(/images/pattern-ticket.svg)] bg-cover bg-center bg-no-repeat pt-[19px] pr-5 pb-[15px] pl-4">
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
            {/* {formData?.name} */}
            Jonatan Kristof
          </div>
          <div className="flex items-center text-sm leading-none">
            {/* {formData?.ghUserName} */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="23"
              fill="none"
              viewBox="0 0 22 23"
              className="mr-1 size-4"
            >
              <path
                fill="#D1D0D5"
                fillRule="evenodd"
                d="M13.022 15.221c.08.268.11.55.088.833l.002.44a.66.66 0 0 1-1.32 0v-.492c.025-.336-.074-.61-.276-.821a.66.66 0 0 1 .405-1.112c1.536-.17 2.559-.704 2.559-2.763 0-.515-.196-1.004-.55-1.375a.66.66 0 0 1-.142-.687c.108-.29.14-.598.096-.897-.225.076-.578.233-1.064.559a.66.66 0 0 1-.542.088 5.81 5.81 0 0 0-3.071 0 .66.66 0 0 1-.543-.088c-.48-.322-.831-.48-1.064-.556-.043.299-.01.606.096.895a.66.66 0 0 1-.14.684c-.359.377-.554.87-.551 1.39 0 2.032 1.027 2.576 2.568 2.768a.66.66 0 0 1 .394 1.112.992.992 0 0 0-.276.756l.001.475c0 .29-.192.549-.47.632a4.082 4.082 0 0 1-1.164.189c-1.22 0-1.799-.735-2.177-1.216-.157-.199-.319-.404-.43-.43a.66.66 0 0 1 .32-1.282c.55.137.867.54 1.147.895.377.478.64.817 1.449.691a2.174 2.174 0 0 1 .096-.683c-1.18-.31-2.778-1.177-2.778-3.904a3.296 3.296 0 0 1 .659-2 3.125 3.125 0 0 1 .17-1.948A.661.661 0 0 1 6.936 7c.192-.058.899-.166 2.214.648a7.105 7.105 0 0 1 3.186 0c1.315-.813 2.021-.704 2.213-.648a.66.66 0 0 1 .42.373c.267.62.325 1.3.172 1.949.428.57.66 1.26.66 1.984 0 2.76-1.596 3.617-2.778 3.915Zm1.252-11.853H6.846c-2.912 0-4.866 2.05-4.866 5.086v6.987c0 3.045 1.954 5.087 4.866 5.087h7.428c2.912 0 4.866-2.042 4.866-5.087V8.454c0-3.036-1.954-5.086-4.866-5.086Z"
                clipRule="evenodd"
              />
            </svg>
            <span>@jonatakristof0101</span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="col-start-2 col-end-3 row-start-1 row-end-3 grid place-items-center">
        <p className="rotate-90">#01609</p>
      </div>
    </div>
  );
}
