"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Check } from "lucide-react";
import { useForm } from "react-hook-form";

import { contactSchema, type ContactFormValues } from "@/lib/schemas";

const fieldStyles =
  "mt-2 w-full rounded-lg border border-surface-200 bg-surface-50 px-4 py-3.5 text-sm text-fg outline-none placeholder:text-steel-500 focus:border-signal-400";
const labelStyles =
  "text-[0.625rem] font-semibold tracking-wide text-steel-300";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      inquiryType: "quote",
      name: "",
      company: "",
      email: "",
      phone: "",
      material: "",
      volume: "",
      machine: "SHREDX M20",
      message: "",
    },
  });
  const onSubmit = () => {
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div
        className="flex min-h-[34rem] flex-col items-center justify-center rounded-2xl border border-surface-200 bg-surface-100 p-8 text-center shadow-sm"
        role="status"
      >
        <span className="flex size-14 items-center justify-center rounded-full bg-signal-100 text-signal-600">
          <Check className="size-6" aria-hidden="true" />
        </span>
        <h2 className="mt-6 font-display text-3xl font-medium text-fg">
          Request received.
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-6 text-steel-300">
          This is a UI demo, so nothing was sent. A backend endpoint can later
          receive this validated payload.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-7 border-b border-signal-400 pb-1 text-xs font-medium tracking-normal text-signal-600"
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
      className="rounded-2xl border border-surface-200 bg-surface-100 p-6 shadow-sm sm:p-9"
    >
      <fieldset>
        <legend className="text-xs font-medium tracking-normal text-steel-300">
          Inquiry type
        </legend>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            ["quote", "Request Quote"],
            ["sales", "Contact Sales"],
            ["general", "General"],
          ].map(([value, label]) => (
            <label
              key={value}
              className="cursor-pointer rounded-lg border border-surface-200 px-3 py-3 text-center text-xs font-medium text-fg focus-within:ring-2 focus-within:ring-signal-400 has-[:checked]:border-signal-500 has-[:checked]:bg-signal-50 has-[:checked]:text-signal-700"
            >
              <input
                type="radio"
                value={value}
                className="sr-only"
                {...register("inquiryType")}
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelStyles}>
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
          <p className="mt-1 min-h-4 text-xs text-signal-600">
            {errors.name?.message}
          </p>
        </div>
        <div>
          <label htmlFor="company" className={labelStyles}>
            Company *
          </label>
          <input
            id="company"
            autoComplete="organization"
            placeholder="Company"
            aria-invalid={Boolean(errors.company)}
            className={fieldStyles}
            {...register("company")}
          />
          <p className="mt-1 min-h-4 text-xs text-signal-600">
            {errors.company?.message}
          </p>
        </div>
        <div>
          <label htmlFor="email" className={labelStyles}>
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
          <p className="mt-1 min-h-4 text-xs text-signal-600">
            {errors.email?.message}
          </p>
        </div>
        <div>
          <label htmlFor="phone" className={labelStyles}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+62 ..."
            className={fieldStyles}
            {...register("phone")}
          />
          <p className="mt-1 min-h-4" />
        </div>
        <div>
          <label htmlFor="material" className={labelStyles}>
            What are you shredding? *
          </label>
          <select
            id="material"
            className={fieldStyles}
            aria-invalid={Boolean(errors.material)}
            {...register("material")}
          >
            <option value="">Select material</option>
            {[
              "Plastic",
              "Rubber",
              "Wood",
              "E-Waste",
              "Packaging",
              "Industrial Scrap",
              "Other",
            ].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <p className="mt-1 min-h-4 text-xs text-signal-600">
            {errors.material?.message}
          </p>
        </div>
        <div>
          <label htmlFor="volume" className={labelStyles}>
            Estimated volume
          </label>
          <select id="volume" className={fieldStyles} {...register("volume")}>
            <option value="">Select volume</option>
            <option>Under 100 kg/day</option>
            <option>100–500 kg/day</option>
            <option>500+ kg/day</option>
          </select>
          <p className="mt-1 min-h-4" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="machine" className={labelStyles}>
            Machine
          </label>
          <select id="machine" className={fieldStyles} {...register("machine")}>
            <option>SHREDX M20</option>
            <option>Accessories / Parts</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="message" className={labelStyles}>
          Additional requirements *
        </label>
        <textarea
          id="message"
          rows={6}
          placeholder="Material dimensions, contamination, target output, location, and project timeline..."
          aria-invalid={Boolean(errors.message)}
          className={fieldStyles}
          {...register("message")}
        />
        <p className="mt-1 min-h-4 text-xs text-signal-600">
          {errors.message?.message}
        </p>
      </div>
      <button
        type="submit"
        className="button-base button-primary mt-4 flex min-h-[3.25rem] w-full items-center justify-center gap-2"
      >
        Request quote <ArrowRight className="size-4" aria-hidden="true" />
      </button>
    </form>
  );
}
