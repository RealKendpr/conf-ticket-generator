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
    <div className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {files.map((file) => (
          <div key={file.name}>
            <img src={file.preview} alt="" />
          </div>
        ))}
        <p className="text-neutral-0">Drag and drop or click to upload</p>
      </div>
    </div>
  );
}
