import { useState } from "react";
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

  return (
    <div className="container mb-7">
      <p className="text-neutral-0 text-xl">Upload Avatar</p>
      <div
        {...getRootProps({
          className:
            "dropzone border-neutral-0 bg-slate-500/25 border border-dashed py-5 text-center rounded-xl cursor-pointer my-3",
        })}
      >
        <input {...getInputProps()} />
        {files.map((file) => (
          <div
            className="mx-auto grid size-[51px] place-items-center rounded-xl border-2 border-neutral-300/50"
            key={file.name}
          >
            <img src={file.preview} alt="" />
          </div>
        ))}
        <p className="text-neutral-0">Drag and drop or click to upload</p>
      </div>
      <p className="text-neutral-0 text-xs">
        Upload your photo (JPG or PNG, max size: 500KB).
      </p>
    </div>
  );
}
