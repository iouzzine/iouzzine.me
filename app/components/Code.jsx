import { cn } from "@/lib/utils";

export const Code = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        "bg-accent/30 hover:bg-accent/50 border border-accent p-1 text-primary rounded-sm",
        className
      )}
      {...props}
    />
  );
};
