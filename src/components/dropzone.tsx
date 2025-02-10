import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

interface FileType extends File {
  preview: string;
}

export default function Dropzone() {
  const [files, setFiles] = useState<FileType[]>([]);
  const [tooLarge, setTooLarge] = useState<boolean>(false);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      // should only accept jpeg, png
      "image/jpeg": [],
      "image/png": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
    // this is for change image button, should only work when clicked and not accept any dragged files
    // if a file is selected (files array's not empty) means the change btn is visible
    noDrag: files.length > 0 && true,
    multiple: false,
    maxFiles: 1,
    //should not exceed file limit, and determine if it does to trigger an alert
    maxSize: 500000,
    validator: (file) => {
      if (file.size > 500000) {
        setTooLarge(true);
      }
      if (file.size <= 500000 && tooLarge) {
        setTooLarge(false);
      }
      return null;
    },
  });

  const handleRemoveImg = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // set files to an empty array, to remove image
    setFiles([]);
  };

  useEffect(() => {
    //Revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <div className="container mb-7">
      <p className="text-neutral-0 text-xl">Upload Avatar</p>
      {files.length === 0 ? (
        <div
          {...getRootProps({
            className:
              "dropzone border-neutral-0 bg-slate-500/25 border border-dashed pt-5 pb-[23px] text-center rounded-xl cursor-pointer my-3",
          })}
        >
          <input {...getInputProps()} />
          <div className="mx-auto grid size-[51px] place-items-center rounded-xl border-2 border-neutral-300/50">
            <img src="/images/icon-upload.svg" alt="" />
          </div>
          <p className="text-neutral-0 mt-4">
            Drag and drop or click to upload
          </p>
        </div>
      ) : (
        <div className="border-neutral-0 my-3 rounded-xl border border-dashed bg-slate-500/25 py-5 text-center">
          {files.map((file) => (
            <div
              className="mx-auto grid size-[51px] place-items-center overflow-hidden rounded-xl border-2 border-neutral-300/50"
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
              <input {...getInputProps()} />
              Change image
            </div>
          </div>
        </div>
      )}
      <div className="flex gap-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
          className={tooLarge ? "text-orange-700" : "text-neutral-0"}
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
          />
          <path fill="currentColor" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.004 10.462V7.596M8 5.569v-.042"
          />
        </svg>
        {tooLarge ? (
          <p
            className="text-xs text-orange-700"
            role="alert"
            aria-live="assertive"
          >
            File too large. Please upload a photo under 500KB.
          </p>
        ) : (
          <p className="text-neutral-0 text-xs">
            Upload your photo (JPG or PNG, max size: 500KB).
          </p>
        )}
      </div>
    </div>
  );
}
