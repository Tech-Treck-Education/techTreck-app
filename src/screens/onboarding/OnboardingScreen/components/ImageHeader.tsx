import React from 'react';
import { Dimensions, Image } from 'react-native';

import { OnboardingPageItem } from '../onboardingData';
import { Box } from '@components';

type ImageHeaderProps = {
	image: OnboardingPageItem['image'];
};
export function ImageHeader({ image }: ImageHeaderProps) {
	const source = image.light;

	return (
		<Box flex={1} justifyContent="center" alignItems="center">
			<Image source={source} />
		</Box>
	);
}
