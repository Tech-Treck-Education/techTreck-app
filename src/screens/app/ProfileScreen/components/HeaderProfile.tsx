import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Box, BoxProps, Icon, Image } from '@components';

export function HeaderProfile({ imageURL }: { imageURL: string | undefined }) {
	const navigation = useNavigation();

	function navigateTo() {}
	function navigateToSettingsScreen() {
		navigation.navigate('SettingsScreen');
	}

	return (
		<Box {...$wrapper}>
			<Box flex={1} flexDirection="row" justifyContent="space-between">
				<Box width={24} height={24} />
				{imageURL === undefined ? (
					<Icon
						name="profileFill"
						size={100}
						color="gray1"
						onPress={navigateTo}
					/>
				) : (
					<Image
						imageURL={imageURL}
						height={100}
						width={100}
						borderRadius={50}
					/>
				)}
				<Box>
					<Icon
						name="settings"
						size={24}
						color="gray1"
						onPress={navigateToSettingsScreen}
					/>
				</Box>
			</Box>
		</Box>
	);
}

const $wrapper: BoxProps = {
	flexDirection: 'row',
	paddingBottom: 's24',
	paddingHorizontal: 's24'
};
