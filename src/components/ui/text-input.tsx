type TextInputProps = Readonly<{
  id: string;
  name: string;
  label: string;
  type?: "text" | "email" | "tel";
  placeholder?: string;
  autoComplete?: string;
}>;

export function TextInput({
  id,
  name,
  label,
  type = "text",
  placeholder,
  autoComplete
}: TextInputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none"
      />
    </div>
  );
}
