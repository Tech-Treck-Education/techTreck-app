import { z } from 'zod';

export const editProfileSchema = z.object({
	name: z.string(),
	email: z.string().email('email inválido'),
	bio: z.string()
});

export type EditProfileSchema = z.infer<typeof editProfileSchema>;
