import React, { memo } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export const FormField = memo(
  ({ field, placeholder, as: Component = Input }) => (
    <div className="space-y-2">
      <Component
        {...field.register}
        placeholder={placeholder}
        className={cn(field.error && "border-red-500")}
      />
      {field.error && (
        <p className="text-red-500 text-sm">{field.error.message}</p>
      )}
    </div>
  )
);

FormField.displayName = "FormField";
