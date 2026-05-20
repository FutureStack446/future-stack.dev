import { z } from "zod";

// This schema ensures that no matter what the frontend sends, 
// the server only accepts sanitized, correctly formatted data.
export const ContactFormSchema = z.object({
  name: z.string().min(2).max(50).trim(),
  email: z.string().email().toLowerCase().trim(),
  subject: z.string().min(2).max(100).trim(),
  message: z.string().min(10).max(1000).trim(),
  website: z.string().max(0).optional(), // Honeypot: Must be empty
});