import { Box, Button, RadioButtonSelector, Screen, Text } from '@components';
import { AuthScreenProps } from '@routes';
import { useState } from 'react';
import { Image } from 'react-native';

type Option = {
	label: string;
	description?: string;
};

const items: Option[] = [
	{
		label: 'Nunca  estudei'
	},
	{
		label: 'Básico'
	},
	{
		label: 'Intermediário'
	},
	{
		label: 'Avançado'
	}
];

export function SignUpChooseProgramminglevelScreen({
	navigation
}: AuthScreenProps<'SignUpChooseProgramminglevelScreen'>) {
	const [selectedItem, setSelectedItem] = useState<Option | undefined>({
		label: 'Nunca  estudei'
	});

	function handleSelectItem(item: Option) {
		setSelectedItem(item);
	}

	function navigateToSignUpChooseAreaProgrammingScreen() {
		navigation.navigate('SignUpChooseAreaProgrammingScreen');
	}

	return (
		<Screen canGoBack scrollable>
			<Box mt="s24" mb="s40">
				<Box alignItems="center" mb="s40">
					<Image
						source={require('../../../../assets/images/onboarding/onboarding-capi-4.png')}
					/>
				</Box>
				<Text preset="headingMedium" color="primary" semiBold>
					Qual é seu nível na área de programação?
				</Text>
			</Box>
			<Box mb="s40">
				<RadioButtonSelector
					items={items}
					selectedItem={selectedItem}
					onSelect={handleSelectItem}
					labelKey="label"
					valueKey="label"
					descriptionKey="description"
				/>
				<Button
					mt="s32"
					// disabled={!formState.isValid}
					onPress={navigateToSignUpChooseAreaProgrammingScreen}
					title="Escolher"
				/>
			</Box>
		</Screen>
	);
}
