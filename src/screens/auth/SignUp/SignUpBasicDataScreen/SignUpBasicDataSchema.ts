import { z } from 'zod';

export const signUpBasicDataSchema = z
	.object({
		name: z
			.string()
			.min(5, 'Nome muito curto')
			.max(50, 'nome muito longo')
			.transform((value) => {
				return value
					.split(' ')
					.map(
						(word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
					)
					.join(' ');
			}),
		email: z.string().email('email inválido'),
		linkImg: z.string().url('URL inválida'),
		password: z
			.string()
			.min(6, 'Senha deve ter no mínimo 6 caracteres')
			.max(20, 'Senha deve ter no máximo 20 caracteres'),
		passwordConfirmation: z
			.string()
			.min(6, 'Senha deve ter no mínimo 6 caracteres')
			.max(20, 'Senha deve ter no máximo 20 caracteres')
	})
	.refine((data) => data.password === data.passwordConfirmation, {
		message: 'As senhas não coincidem',
		path: ['passwordConfirmation']
	});

export type SignUpBasicDataSchema = z.infer<typeof signUpBasicDataSchema>;
