export default function Input({
  label,
  type,
  name,
  placeholder,
}: {
  label: string;
  type: "text" | "email";
  name: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xl" htmlFor={name}>
        {label}
      </label>
      <input className="" type={type} name={name} id={name} placeholder={placeholder} />
    </div>
  );
}
