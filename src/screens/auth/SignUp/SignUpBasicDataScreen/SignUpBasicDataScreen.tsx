import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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
import { Image } from 'react-native';
import { AuthScreenProps } from '@routes';

export function SignUpBasicDataScreen({
	navigation
}: AuthScreenProps<'SignUpBasicDataScreen'>) {
	const { control, formState, handleSubmit } = useForm<SignUpBasicDataSchema>({
		resolver: zodResolver(signUpBasicDataSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			passwordConfirmation: ''
		},
		mode: 'onChange'
	});

	function submitForm(formValues: SignUpBasicDataSchema) {
		// signUp(formValues);
		console.log(formValues);
		navigation.navigate('SignUpChooseProgramminglevelScreen');
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
				// loading={isLoading}
				// disabled={!formState.isValid}
				onPress={handleSubmit(submitForm)}
				title="Cadastrar"
			/>
		</Screen>
	);
}
