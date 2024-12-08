import { Button, FormTextInput, Screen } from '@components';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { EditProfileSchema, editProfileSchema } from './editProfileSchema';

interface UserProfile {
	name: string;
	email: string;
	bio: string;
}

const initialState: UserProfile = {
	name: 'John Doe',
	email: 'johndoe@example.com',
	bio: 'Lorem ipsum...'
};

export function EditProfileScreen() {
	const [userData, setUserData] = useState<UserProfile>(initialState);

	const { control, formState, handleSubmit } = useForm<EditProfileSchema>({
		resolver: zodResolver(editProfileSchema),
		defaultValues: userData,
		mode: 'onChange'
	});

	const handleSave = (data: UserProfile) => {
		setUserData(data);
	};

	return (
		<Screen canGoBack>
			<FormTextInput
				control={control}
				name="name"
				label="Nome"
				placeholder="Digite seu nome"
				boxProps={{ mb: 's20' }}
			/>

			<FormTextInput
				control={control}
				name="email"
				label="E-mail"
				placeholder="Digite seu email"
				boxProps={{ mb: 's20' }}
			/>

			<FormTextInput
				control={control}
				name="bio"
				label="Bio"
				placeholder="Escreva sua bio"
				multiline
				boxProps={{ mb: 's60' }}
			/>

			<Button title="Salvar" onPress={handleSubmit(handleSave)} />
		</Screen>
	);
}
