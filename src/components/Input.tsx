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
      <label className="text-neutral-0 text-xl" htmlFor={name}>
        {label}
      </label>
      <input
        className="text-neutral-0 w-full rounded-xl border border-neutral-500 bg-neutral-500/50 px-4 pt-5 pb-4 text-lg"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
