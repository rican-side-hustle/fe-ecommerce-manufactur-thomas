"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Check } from "lucide-react";
import { useForm } from "react-hook-form";

import { contactSchema, type ContactFormValues } from "@/lib/schemas";

const fieldStyles =
  "mt-2 w-full border border-white/15 bg-ink-950 px-4 py-3.5 text-sm text-white outline-none placeholder:text-steel-500 focus:border-signal-400";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", company: "", message: "" },
  });

  const onSubmit = () => {
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div
        className="flex min-h-[30rem] flex-col items-center justify-center border border-white/10 bg-ink-900 p-8 text-center"
        role="status"
      >
        <span className="flex size-14 items-center justify-center bg-signal-400 text-ink-950">
          <Check className="size-6" aria-hidden="true" />
        </span>
        <h2 className="mt-6 font-display text-3xl font-black uppercase text-white">
          Request received.
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-6 text-steel-300">
          This is a UI demo, so nothing was sent. The production API can be
          connected to this validated form.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-7 border-b border-signal-400 pb-1 text-xs font-bold uppercase tracking-industrial text-signal-300"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="border border-white/10 bg-ink-900 p-6 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="text-[0.625rem] font-bold uppercase tracking-industrial text-steel-300"
          >
            Name *
          </label>
          <input
            id="name"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            className={fieldStyles}
            {...register("name")}
          />
          <p className="mt-1 min-h-4 text-xs text-signal-300">
            {errors.name?.message}
          </p>
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-[0.625rem] font-bold uppercase tracking-industrial text-steel-300"
          >
            Work email *
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            className={fieldStyles}
            {...register("email")}
          />
          <p className="mt-1 min-h-4 text-xs text-signal-300">
            {errors.email?.message}
          </p>
        </div>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="company"
            className="text-[0.625rem] font-bold uppercase tracking-industrial text-steel-300"
          >
            Company
          </label>
          <input
            id="company"
            autoComplete="organization"
            placeholder="Company or lab"
            className={fieldStyles}
            {...register("company")}
          />
          <p className="mt-1 min-h-4 text-xs text-signal-300">
            {errors.company?.message}
          </p>
        </div>
        <div>
          <label
            htmlFor="application"
            className="text-[0.625rem] font-bold uppercase tracking-industrial text-steel-300"
          >
            Application
          </label>
          <select id="application" defaultValue="" className={fieldStyles}>
            <option value="" disabled>
              Select application
            </option>
            <option>3D print recycling</option>
            <option>Production scrap</option>
            <option>Education / research</option>
            <option>Other material</option>
          </select>
          <p className="mt-1 min-h-4" />
        </div>
      </div>
      <div className="mt-5">
        <label
          htmlFor="message"
          className="text-[0.625rem] font-bold uppercase tracking-industrial text-steel-300"
        >
          What do you need to shred? *
        </label>
        <textarea
          id="message"
          rows={6}
          placeholder="Material, part size, expected volume, and your location..."
          aria-invalid={Boolean(errors.message)}
          className={fieldStyles}
          {...register("message")}
        />
        <p className="mt-1 min-h-4 text-xs text-signal-300">
          {errors.message?.message}
        </p>
      </div>
      <button
        type="submit"
        className="mt-4 flex min-h-[3.25rem] w-full items-center justify-center gap-2 bg-signal-400 px-6 text-xs font-black uppercase tracking-industrial text-ink-950 hover:bg-signal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900"
      >
        Send project details{" "}
        <ArrowRight className="size-4" aria-hidden="true" />
      </button>
    </form>
  );
}
