import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { AuthScreenProps } from 'src/routes/navigationType';

import { Box, Button, FormTextInput, Screen, Text } from '@components';

import {
	ForgotPasswordSchema,
	forgotPasswordSchema
} from './forgotPasswordSchema';
import { Image } from 'react-native';

export function ForgotPasswordScreen({
	navigation
}: AuthScreenProps<'ForgotPasswordScreen'>) {
	const { control, formState, handleSubmit } = useForm<ForgotPasswordSchema>({
		resolver: zodResolver(forgotPasswordSchema),
		defaultValues: {
			email: ''
		},
		mode: 'onChange'
	});

	function submitForm(values: ForgotPasswordSchema) {
		navigation.navigate('ForgotPasswordFillCodeScreen');
	}

	return (
		<Screen canGoBack flex={1}>
			<Box mt="s24" mb="s32">
				<Box alignItems="center" mb="s40">
					<Image
						source={require('../../../../assets/images/onboarding/onboarding-capi-5.png')}
					/>
				</Box>
				<Text preset="headingLarge" mb="s16" bold>
					Recuperar senha
				</Text>
				<Text preset="paragraphMedium">
					Preencha seu e-mail. Você receberá as instruções para recuperação de
					senha no seu e-mail :)
				</Text>
			</Box>
			<Box justifyContent="center">
				<FormTextInput
					control={control}
					name="email"
					label="E-mail"
					placeholder="Digite seu e-mail"
					boxProps={{ mb: 's40' }}
				/>

				<Button
					disabled={!formState.isValid}
					onPress={handleSubmit(submitForm)}
					title="Enviar código"
				/>
			</Box>
		</Screen>
	);
}
