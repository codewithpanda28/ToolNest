import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Your name please")
    .max(60, "Name too long"),
  email: z.string().email("Enter a valid email"),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(120, "Subject too long"),
  message: z
    .string()
    .min(10, "Write at least 10 characters")
    .max(2000, "Keep it under 2000 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;