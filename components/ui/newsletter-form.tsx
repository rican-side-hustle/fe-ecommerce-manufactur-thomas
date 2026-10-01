"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";

import { newsletterSchema, type NewsletterFormValues } from "@/lib/schemas";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = () => {
    setSubmitted(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-5">
      <div className="flex border-b border-ink-700 focus-within:border-signal-400">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="WORK@COMPANY.COM"
          className="min-w-0 flex-1 bg-transparent py-3 text-xs font-medium tracking-normal text-steel-100 outline-none placeholder:text-steel-100/50"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "newsletter-error" : undefined}
          {...register("email")}
        />
        <button
          type="submit"
          aria-label="Subscribe to updates"
          className="flex size-11 items-center justify-center text-signal-300 hover:text-steel-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400"
        >
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </div>
      <p
        id="newsletter-error"
        className="mt-2 min-h-4 text-xs text-signal-300"
        aria-live="polite"
      >
        {errors.email?.message ??
          (submitted ? "You’re on the list. Watch your inbox." : "")}
      </p>
    </form>
  );
}
