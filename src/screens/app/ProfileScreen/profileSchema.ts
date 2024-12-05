import { z } from 'zod';

export const profileSchema = z.object({
	email: z.string().email('email inválido'),
});

export type ProfileSchema = z.infer<typeof profileSchema>;
