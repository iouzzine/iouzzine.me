"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FormField } from "./FormField";

const schema = z.object({
  name: z.string().min(5, "Name is required"),
  email: z.string().email("Invalid email format"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(20, "Message is required"),
});

export const ContactForm = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          from: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Message sent successfully!",
          variant: "success",
          duration: 2000,
        });
        reset();
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
          duration: 2000,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "An error occurred. Please try again later.",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  const getFieldProps = (name) => ({
    register: register(name),
    error: errors[name],
  });

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      {["name", "email", "subject"].map((field, index) => (
        <motion.div
          key={field}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <FormField
            field={getFieldProps(field)}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="bg-background/50 backdrop-blur-sm border-2 focus-within:border-primary/50 hover:border-primary/30 transition-colors duration-300"
          />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <FormField
          field={getFieldProps("message")}
          placeholder="Message"
          as={Textarea}
          className="min-h-[120px] bg-background/50 backdrop-blur-sm border-2 focus-within:border-primary/50 hover:border-primary/30 transition-colors duration-300"
        />
      </motion.div>

      <motion.div
        className="flex justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Button
          type="submit"
          variant="outline"
          size="lg"
          disabled={isSubmitting}
          className="relative group overflow-hidden border-2 border-primary/50 hover:border-primary bg-background/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300"
        >
          <span className="flex items-center gap-2 relative z-10">
            <span className="uppercase font-semibold tracking-wider text-primary group-hover:text-primary/80">
              {isSubmitting ? (
                <motion.span
                  animate={{ opacity: [1, 0.5] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  Sending...
                </motion.span>
              ) : (
                "Send Message"
              )}
            </span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`text-primary group-hover:text-primary/80 group-hover:translate-x-1 transition-all duration-300 ${
                isSubmitting ? "animate-pulse" : ""
              }`}
            >
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </motion.svg>
          </span>
        </Button>
      </motion.div>
    </motion.form>
  );
};
