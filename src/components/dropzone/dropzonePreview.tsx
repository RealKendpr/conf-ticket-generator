import { ChangeEventHandler, Dispatch, SetStateAction } from "react";
import { FileType } from "./dropzone";

export default function DropzonePreview({
  files,
  setFiles,
  getRootProps,
  getInputProps,
  onChange,
}: {
  files: FileType[];
  setFiles: Dispatch<SetStateAction<FileType[]>>;
  getRootProps: any;
  getInputProps: any;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) {
  const handleRemoveImg = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // set files to an empty array, to remove image
    setFiles([]);
  };
  return (
    <div className="border-neutral-0 my-3 rounded-xl border border-dashed bg-slate-500/25 py-5 text-center">
      {files.map((file) => (
        <div
          className="mx-auto grid size-[51px] place-items-center overflow-hidden rounded-xl border-2 border-neutral-300/50 shadow-xl"
          key={file.name}
        >
          <img
            src={file.preview}
            alt=""
            onLoad={() => {
              // Revoke data uri after image is loaded
              URL.revokeObjectURL(file.preview);
            }}
          />
        </div>
      ))}
      {/* Avatar options */}
      <div className="mt-4 flex justify-center gap-2 text-xs text-neutral-300 *:cursor-pointer *:rounded-md *:bg-neutral-300/50 *:px-2 *:pt-[5px] *:pb-[6px]">
        <button className="underline" onClick={handleRemoveImg}>
          Remove image
        </button>
        {/* change image button is just a dropzone but with drag n drop disabled */}
        <div
          {...getRootProps({
            className: "dropzone",
          })}
        >
          <input {...getInputProps({ onChange })} />
          Change image
        </div>
      </div>
    </div>
  );
}
