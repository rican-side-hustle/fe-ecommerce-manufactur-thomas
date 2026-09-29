import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.email("Please enter a valid email address."),
  company: z.string().trim().max(100).optional(),
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
