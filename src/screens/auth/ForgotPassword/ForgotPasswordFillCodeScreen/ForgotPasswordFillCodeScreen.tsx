import React from 'react';

import { Box, Button, Screen, Text, TextInput } from '@components';

import { Image } from 'react-native';

export function ForgotPasswordFillCodeScreen() {
	function submitForm() {}

	return (
		<Screen canGoBack flex={1}>
			<Box mt="s24" mb="s40">
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
				<Box flexDirection="row" mb="s32" gap="s24">
					<TextInput />
					<TextInput />
					<TextInput />
					<TextInput />
				</Box>
				<Button
					// disabled={!formState.isValid}
					onPress={submitForm}
					title="Recuperar senha"
				/>

				<Button
					mt="s24"
					preset="outline"
					// disabled={!formState.isValid}
					onPress={submitForm}
					title="Reenviar código"
				/>
			</Box>
		</Screen>
	);
}
