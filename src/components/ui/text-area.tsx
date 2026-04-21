type TextAreaProps = Readonly<{
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  rows?: number;
}>;

export function TextArea({ id, name, label, placeholder, rows = 5 }: TextAreaProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium" htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        rows={rows}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none"
      />
    </div>
  );
}
