import { ChangeEventHandler, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import DropzoneWarning from "./dropzoneWarning";
import DropzonePreview from "./dropzonePreview";
import DropzoneField from "./dropzoneField";

export interface FileType extends File {
  preview: string;
}

export default function Dropzone({
  onChange,
}: {
  onChange: ChangeEventHandler<HTMLInputElement>;
}) {
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

  useEffect(() => {
    //Revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <div className="container mb-7">
      <p className="text-neutral-0 text-xl">Upload Avatar</p>
      {/* removed the hidden input ref because we are now using react-hook-form to get the file's preview url */}
      {files.length === 0 ? (
        // dropzone box. hidden if theres a selected avatar
        <DropzoneField
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          onChange={onChange}
        />
      ) : (
        // preview box
        <DropzonePreview
          files={files}
          setFiles={setFiles}
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          onChange={onChange}
        />
      )}
      <DropzoneWarning tooLarge={tooLarge} />
    </div>
  );
}
