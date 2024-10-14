"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
    <Card className="w-full p-4 flex flex-col gap-2">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <FormField field={getFieldProps("name")} placeholder="Name" />
        <FormField field={getFieldProps("email")} placeholder="Email" />
        <FormField field={getFieldProps("subject")} placeholder="Subject" />
        <FormField
          field={getFieldProps("message")}
          placeholder="Message"
          as={Textarea}
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            variant="outline"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </Card>
  );
};
