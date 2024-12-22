"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { FormField } from "./formField";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const schema = z.object({
  name: z.string().min(5, "Name is required"),
  email: z.string().email("Invalid email format"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(20, "Message is required"),
}) satisfies z.ZodType<FormData>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async (data: FormData) => {
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
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <FormField
          placeholder="Your Name"
          register={register("name")}
          error={errors.name}
        />

        <FormField
          placeholder="Subject"
          register={register("subject")}
          error={errors.subject}
        />

        <FormField
          type="email"
          placeholder="Your Email"
          register={register("email")}
          error={errors.email}
        />

        <FormField
          type="textarea"
          placeholder="Your Message"
          register={register("message")}
          error={errors.message}
          rows={6}
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        disabled={isSubmitting}
        className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-xl font-medium flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        <MessageSquare size={18} />
      </motion.button>
    </form>
  );
};

export default ContactForm;
