import { Controller, useFormContext } from "react-hook-form";
import Dropzone from "./dropzone";

export default function DropZoneField() {
  const { control } = useFormContext();

  return (
    <Controller
      render={({ field: { onChange } }) => (
        <Dropzone onChange={(e) => onChange(e.target.files?.[0] ?? null)} />
      )}
      name="myAvatar"
      control={control}
      defaultValue=""
    />
  );
}
