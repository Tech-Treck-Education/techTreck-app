import { Box, BoxProps, Text } from '@components';
import { Image } from 'react-native';

export function HomeTitle() {
	return (
		<Box {...$wrapper}>
			<Box>
				<Text preset="headingLarge" style={{ fontWeight: '700' }}>
					Continuar trilha:
				</Text>
				<Text color="bluePrimary">Front-End</Text>
			</Box>
			<Box alignItems="center" ml="s10">
				<Image
					source={require('../../../../assets/images/onboarding/onboarding-capi-4.png')}
				/>
			</Box>
		</Box>
	);
}

const $wrapper: BoxProps = {
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'flex-start',
	paddingBottom: 's24',
	paddingLeft: 's24'
};
