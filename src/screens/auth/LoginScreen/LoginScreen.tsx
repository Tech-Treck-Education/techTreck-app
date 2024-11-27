import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
	Box,
	Button,
	FormPasswordInput,
	FormTextInput,
	Screen,
	Text,
	TouchableOpacityBox
} from '@components';

import { LoginSchema, loginSchema } from './loginSchema';
import { Image } from 'react-native';

export function LoginScreen() {
	const { control, formState, handleSubmit } = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: ''
		},
		mode: 'onChange'
	});

	function submitForm({ email, password }: LoginSchema) {}

	function navigateToSignUpScreen() {}

	function navigateToForgotPasswordScreen() {}

	return (
		<Screen scrollable>
			<Box alignItems="center" mb="s40">
				<Image source={require('../../../brand/logo-simples.jpg')} />
			</Box>

			<FormTextInput
				control={control}
				name="email"
				label="E-mail"
				placeholder="Digite seu e-mail"
				boxProps={{ mb: 's20' }}
			/>

			<FormPasswordInput
				control={control}
				name="password"
				label="Senha"
				placeholder="Digite sua senha"
				boxProps={{ mb: 's20' }}
			/>

			<Text
				onPress={navigateToForgotPasswordScreen}
				color="primary"
				preset="paragraphMedium"
			>
				Recuperar senha
			</Text>
			<Box mt="s32" flexDirection="row" justifyContent="center" gap="s40">
				<TouchableOpacityBox>
					<Image source={require('../../../assets/images/linkeding.png')} />
				</TouchableOpacityBox>
				<TouchableOpacityBox>
					<Image source={require('../../../assets/images/github.png')} />
				</TouchableOpacityBox>
				<TouchableOpacityBox>
					<Image source={require('../../../assets/images/google.png')} />
				</TouchableOpacityBox>
			</Box>
			<Button
				// loading={isLoading}
				disabled={!formState.isValid}
				onPress={handleSubmit(submitForm)}
				mt="s48"
				title="Entrar"
			/>
			<Button
				onPress={navigateToSignUpScreen}
				preset="outline"
				mt="s12"
				title="Criar uma conta"
			/>
		</Screen>
	);
}
