import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

interface FileType extends File {
  preview: string;
}

export default function Dropzone() {
  const [files, setFiles] = useState<FileType[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
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
              "dropzone border-neutral-0 bg-slate-500/25 border border-dashed py-5 text-center rounded-xl cursor-pointer my-3",
          })}
        >
          <input {...getInputProps()} />
          <div className="mx-auto grid size-[51px] place-items-center rounded-xl border-2 border-neutral-300/50">
            <img src="/images/icon-upload.svg" alt="" />
          </div>
          <p className="text-neutral-0">Drag and drop or click to upload</p>
        </div>
      ) : (
        <div className="border-neutral-0 my-3 rounded-xl border border-dashed bg-slate-500/25 py-5 text-center">
          {files.map((file) => (
            <div
              className="mx-auto size-[51px] overflow-hidden rounded-xl border-2 border-neutral-300/50"
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
            <button>Change image</button>
          </div>
        </div>
      )}
      <p className="text-neutral-0 text-xs">
        Upload your photo (JPG or PNG, max size: 500KB).
      </p>
    </div>
  );
}
