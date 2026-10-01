import { z } from "zod";

export const contactSchema = z.object({
  inquiryType: z.enum(["quote", "sales", "general"]),
  name: z.string().trim().min(2, "Please enter your name."),
  company: z.string().trim().min(2, "Please enter your company."),
  email: z.email("Please enter a valid email address."),
  phone: z.string().trim().max(30).optional(),
  material: z.string().min(1, "Select a material."),
  volume: z.string().optional(),
  machine: z.string().optional(),
  message: z
    .string()
    .trim()
    .min(20, "Tell us a little more about your project."),
});

export const newsletterSchema = z.object({
  email: z.email("Please enter a valid email address."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
export type NewsletterFormValues = z.infer<typeof newsletterSchema>;
