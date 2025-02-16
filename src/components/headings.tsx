export default function Headings({
  name,
  email,
  formSubmitted,
}: {
  name: string | undefined;
  email: string | undefined;
  formSubmitted: boolean;
}) {
  return (
    <>
      {formSubmitted ? (
        <>
          <h1 className="text-neutral-0 text-center text-[1.75rem] leading-[1.1] font-bold md:text-[4.03vw]">
            Congrat's{" "}
            <span className="from-orange-gradient to-neutral-0 bg-linear-to-r bg-clip-text text-transparent">
              {name}!
            </span>{" "}
            Your ticket is ready.
          </h1>
          <h2 className="mt-8 mb-11 text-center text-xl leading-[1.2] text-neutral-300 md:mt-6 md:text-[1.53vw]">
            We've mailed your ticket to{" "}
            <span className="text-orange-500">{email}</span> and will send
            updates in the run up to the event.
          </h2>
        </>
      ) : (
        <>
          <h1 className="text-neutral-0 text-center text-[1.75rem] leading-[1.1] font-bold md:text-[4.03vw]">
            Your Journey to Coding Conf 2025 Starts Here!
          </h1>
          <h2 className="mt-8 mb-11 text-center text-xl leading-[1.2] text-neutral-300 md:mt-6 md:text-[1.53vw]">
            Secure your spot at next year's biggest coding conference.
          </h2>
        </>
      )}
    </>
  );
}
