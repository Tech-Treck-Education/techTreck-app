import { Box, Button, RadioButtonSelector, Screen, Text } from '@components';
import { AuthScreenProps } from '@routes';
import { useToastService } from '@services';
import { useState } from 'react';
import { Image } from 'react-native';

type Option = {
	label: string;
	description?: string;
};

const items: Option[] = [
	{
		label: '10 minutos'
	},
	{
		label: '30 minutos'
	},
	{
		label: '1 hora'
	},
	{
		label: 'Mais de 1 hora'
	}
];

export function SignUpChooseStudyTimeScreen({
	navigation
}: AuthScreenProps<'SignUpChooseStudyTimeScreen'>) {
	const { showToast } = useToastService();
	const [selectedItem, setSelectedItem] = useState<Option | undefined>({
		label: '10 minutos'
	});

	function handleSelectItem(item: Option) {
		setSelectedItem(item);
	}

	function navigateToSignupPlanScreen() {
		showToast({
			message: 'Conta criada com sucesso!',
			type: 'success',
			position: 'top'
		});
		navigation.navigate('SignUpPlanScreen');
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
					Quanto tempo por dia você quer se dedicar aos estudos?
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
					onPress={navigateToSignupPlanScreen}
					title="Escolher"
				/>
			</Box>
		</Screen>
	);
}
