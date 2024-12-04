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
		label: 'Back-End'
	},
	{
		label: 'Front-End'
	},
	{
		label: 'Mobile'
	},
	{
		label: 'Ciência de dados'
	}
];

export function SignUpChooseAreaProgrammingScreen({
	navigation
}: AuthScreenProps<'SignUpChooseAreaProgrammingScreen'>) {
	const [selectedItem, setSelectedItem] = useState<Option | undefined>({
		label: 'Back-End'
	});

	function handleSelectItem(item: Option) {
		setSelectedItem(item);
	}

	function navigateToSignUpScreen() {
		navigation.navigate('SignUpChooseStudyTimeScreen');
	}

	return (
		<Screen canGoBack scrollable>
			<Box mt="s24" mb="s40">
				<Box alignItems="center" mb="s40">
					<Image
						source={require('../../../../assets/images/onboarding/onboarding-capi-2.png')}
					/>
				</Box>
				<Text preset="headingMedium" color="primary" semiBold>
					Qual área você tem interesse de atuar?
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
					onPress={navigateToSignUpScreen}
					title="Escolher"
				/>
			</Box>
		</Screen>
	);
}
