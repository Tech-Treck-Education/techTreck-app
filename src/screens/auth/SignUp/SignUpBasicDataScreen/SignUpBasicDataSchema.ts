import { z } from 'zod';

export const signUpBasicDataSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	password: z.string(),
	passwordConfirmation: z.string()
});

export type SignUpBasicDataSchema = z.infer<typeof signUpBasicDataSchema>;
