'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Send, Github, Linkedin, Mail, Copy, Check, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import SectionHeader from '@/components/ui/section-header';
import { AnimateIn } from '@/components/ui/animate-in';
import type { PersonalInfo } from '@/types';

interface ContactProps {
  personal: PersonalInfo;
}

interface FormValues {
  name: string;
  email: string;
  message: string;
  website?: string;
}

const Contact = ({ personal }: ContactProps) => {
  const [copied, setCopied] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (values: FormValues) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error('Failed to send');
      toast.success("Message sent! I'll get back to you soon.");
      reset();
    } catch {
      toast.error('Something went wrong. Please try again or email me directly.');
    }
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personal.email);
    setCopied(true);
    toast.success('Email copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact"
      className="mx-auto max-w-5xl px-4 py-24 sm:px-6"
    >
      <AnimateIn>
        <SectionHeader
          label="Say hello"
          title="Get in Touch"
          subtitle="Open to new opportunities, collaborations, or just a friendly chat. I'll get back to you within 24 hours."
        />
      </AnimateIn>

      <div className="grid items-start gap-12 md:grid-cols-2">
        <AnimateIn delay={0.1}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
            <input
              type="text"
              autoComplete="off"
              tabIndex={-1}
              aria-hidden="true"
              className="absolute h-0 w-0 overflow-hidden opacity-0"
              {...register('website')}
            />
            <div className="space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                {...register('name', { required: 'Name is required' })}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-destructive text-xs">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
                })}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-destructive text-xs">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="What's on your mind?"
                rows={5}
                {...register('message', {
                  required: 'Message is required',
                  minLength: { value: 10, message: 'At least 10 characters' },
                })}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-destructive text-xs">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full gap-2">
              <Send className="h-4 w-4" />
              {isSubmitting ? 'Sending…' : 'Send message'}
            </Button>
          </form>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="space-y-6">
            <div>
              <p className="text-muted-foreground mb-3 text-sm font-medium tracking-wide uppercase">
                Direct contact
              </p>
              <button
                onClick={copyEmail}
                className="hover:text-primary group flex items-center gap-2 text-base transition-colors"
                aria-label="Copy email address"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="text-muted-foreground group-hover:text-primary h-4 w-4 transition-colors" />
                )}
                {personal.email}
              </button>
            </div>

            <div>
              <p className="text-muted-foreground mb-3 text-sm font-medium tracking-wide uppercase">
                Elsewhere
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors"
                >
                  <Github className="h-4 w-4" />
                  github.com/iouzzine
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  linkedin.com/in/ismailouzz
                </a>
              </div>
            </div>

            {personal.calendly && (
              <div>
                <p className="text-muted-foreground mb-3 text-sm font-medium tracking-wide uppercase">
                  Book a call
                </p>
                <a
                  href={personal.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-primary/40 hover:border-primary/70 hover:bg-primary/5 inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all"
                >
                  <CalendarDays className="h-4 w-4" />
                  Schedule a 30-min call
                </a>
              </div>
            )}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default Contact;
