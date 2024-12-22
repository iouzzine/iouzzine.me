import { UseFormRegisterReturn } from "react-hook-form";
import { FieldError } from "react-hook-form";

interface FormFieldProps {
  type?: "text" | "email" | "textarea";
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  rows?: number;
}

export const FormField = ({
  type = "text",
  placeholder,
  register,
  error,
  rows,
}: FormFieldProps) => {
  const baseClassName =
    "w-full px-6 py-4 bg-gradient-to-tr from-background via-background/80 to-background rounded-xl outline-none focus:ring-2 focus:ring-primary/50";

  return (
    <div className="bg-gradient-to-tr from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-2">
      {type === "textarea" ? (
        <textarea
          rows={rows}
          placeholder={placeholder}
          className={baseClassName}
          {...register}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={baseClassName}
          {...register}
        />
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
    </div>
  );
};
