import { cn } from "@/lib/utils";

export const Section = ({ children, className }) => {
  return (
    <section className={cn("max-w-4xl px-4 m-auto", className)}>
      {children}
    </section>
  );
};
