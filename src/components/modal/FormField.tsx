import type { InputHTMLAttributes } from "react";

interface FormFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "onChange"> {
  id: string;
  label: string;
  error?: string;
  onChange: (value: string) => void;
}

/** Campo de formulario accesible: label siempre visible, error debajo del campo. */
export function FormField({ id, label, error, onChange, className = "", ...rest }: FormFieldProps) {
  const errorId = `${id}-error`;

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block font-body text-sm font-medium text-navy-900">
        {label}
      </label>
      <input
        id={id}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`w-full rounded-[var(--radius-sm)] border bg-white px-3.5 py-2.5 font-body text-[15px] text-navy-900 outline-none transition-colors placeholder:text-text-muted-light/70 ${
          error ? "border-danger" : "border-border-light focus:border-blue-600"
        }`}
        {...rest}
      />
      {error ? (
        <p id={errorId} role="alert" className="mt-1.5 text-xs font-medium text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
