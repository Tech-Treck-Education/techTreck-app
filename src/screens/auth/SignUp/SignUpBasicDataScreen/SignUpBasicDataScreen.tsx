import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Image } from 'react-native';
import { AuthScreenProps } from '@routes';
import {
	SignUpBasicDataSchema,
	signUpBasicDataSchema
} from './SignUpBasicDataSchema';
import {
	Box,
	Button,
	FormPasswordInput,
	FormTextInput,
	Screen,
	Text
} from '@components';
import api from 'src/services/api';
import { useToastService } from '@services';

export function SignUpBasicDataScreen({
	navigation
}: AuthScreenProps<'SignUpBasicDataScreen'>) {
	const [isLoading, setIsLoading] = useState(false);

	const { showToast } = useToastService();
	const { control, formState, handleSubmit } = useForm<SignUpBasicDataSchema>({
		resolver: zodResolver(signUpBasicDataSchema),
		defaultValues: {
			name: '',
			email: '',
			linkImg: '',
			password: '',
			passwordConfirmation: ''
		},
		mode: 'onChange'
	});

	async function createProfile(formValues: SignUpBasicDataSchema) {
		try {
			setIsLoading(true);
			await api.post(`/users`, {
				name: formValues.name,
				email: formValues.email,
				password: formValues.password
			});

			showToast({
				message:
					'Conta criada com sucesso! Agora precisamos personalizar sua experiência',
				type: 'success',
				position: 'top'
			});

			navigation.navigate('SignUpChooseProgramminglevelScreen');
		} catch (error) {
			console.log(error);
			showToast({
				message: 'Erro ao criar conta. Verifique os dados e tente novamente',
				type: 'error',
				position: 'top'
			});
		} finally {
			setIsLoading(false);
		}
	}

	function navigateToLoginScreen() {
		navigation.navigate('LoginScreen');
	}

	return (
		<Screen canGoBack scrollable>
			<Box alignItems="center" mb="s40">
				<Image source={require('../../../../brand/logo-simples.jpg')} />
			</Box>

			<FormTextInput
				control={control}
				name="name"
				autoCapitalize="words"
				label="Nome completo"
				placeholder="Digite seu nome completo"
				boxProps={{ mb: 's20' }}
			/>

			<FormTextInput
				control={control}
				name="email"
				label="E-mail"
				placeholder="Digite o seu e-mail"
				boxProps={{ mb: 's20' }}
			/>

			<FormTextInput
				control={control}
				name="linkImg"
				label="Link de uma imagem sua"
				placeholder="Cole aqui o link da sua imagem"
				boxProps={{ mb: 's20' }}
			/>

			<FormPasswordInput
				control={control}
				name="password"
				label="Senha"
				placeholder="Digite sua senha"
				boxProps={{ mb: 's20' }}
			/>
			<FormPasswordInput
				control={control}
				name="passwordConfirmation"
				label="Confirme sua senha"
				placeholder="Digite a senha novamente"
				boxProps={{ mb: 's24' }}
			/>

			<Text
				onPress={navigateToLoginScreen}
				color="primary"
				preset="paragraphMedium"
				textAlign="center"
				mb="s24"
			>
				Já possui conta? Faça login
			</Text>
			<Button
				loading={isLoading}
				disabled={!formState.isValid}
				onPress={handleSubmit(createProfile)}
				title="Cadastrar"
			/>
		</Screen>
	);
}
