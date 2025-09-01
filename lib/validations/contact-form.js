import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  checkIn: z.date(),
  checkOut: z.date(),
  guests: z.number().min(1).max(4),
  message: z.string().min(10, 'Message must be at least 10 characters')
})