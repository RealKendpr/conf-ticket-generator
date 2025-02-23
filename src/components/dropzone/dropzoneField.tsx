import { ChangeEventHandler } from "react";

const BASE_URL = import.meta.env.BASE_URL;

export default function DropzoneField({
  getRootProps,
  getInputProps,
  onChange,
}: {
  getRootProps: any;
  getInputProps: any;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div
      {...getRootProps({
        className:
          "dropzone border-neutral-500/50 bg-slate-500/20 hover:bg-neutral-700/85 border border-dashed pt-5 pb-[23px] text-center rounded-xl cursor-pointer my-3 backdrop-blur-[3px] transition-colors",
      })}
    >
      <input {...getInputProps({ onChange })} aria-hidden />
      <div className="mx-auto grid size-[51px] place-items-center rounded-xl border-2 border-neutral-300/50 bg-neutral-500/25 shadow-xl">
        <img src={`${BASE_URL}/images/icon-upload.svg`} alt="" />
      </div>
      <p className="text-neutral-0 mt-4">Drag and drop or click to upload</p>
    </div>
  );
}
