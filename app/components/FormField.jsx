import React, { memo } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export const FormField = ({
  field,
  placeholder,
  as: Component = Input,
  className = "",
}) => {
  return (
    <div className="space-y-2">
      <Component
        placeholder={placeholder}
        {...field.register}
        className={`w-full ${className}`}
      />
      {field.error && (
        <p className="text-sm text-destructive">{field.error.message}</p>
      )}
    </div>
  );
};

FormField.displayName = "FormField";
