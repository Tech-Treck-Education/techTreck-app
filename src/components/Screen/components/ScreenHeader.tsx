import React from 'react';

import { Box, TouchableOpacityBox } from '../../Box/Box';
import { Text } from '../../Text/Text';
import { Icon } from '../../Icon/Icon';

import { ScreenProps } from '../Screen';

const ICON_SIZE = 20;
type Props = Pick<ScreenProps, 'canGoBack' | 'title' | 'leftCanGoBack'>;
export function ScreenHeader({ canGoBack, title, leftCanGoBack }: Props) {
	// const navigation = useNavigation();
	return (
		<Box
			flexDirection="row"
			mb="s24"
			ml={leftCanGoBack ? 's24' : 's0'}
			alignItems="center"
			justifyContent="space-between"
		>
			{canGoBack && (
				<TouchableOpacityBox
					flexDirection="row"
					alignItems="center"
					// onPress={navigation.goBack}
				>
					<Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
					{!title && (
						<Text preset="paragraphMedium" semiBold ml="s8">
							Voltar
						</Text>
					)}
				</TouchableOpacityBox>
			)}
			{title && <Text preset="headingSmall">{title}</Text>}
			{title && <Box width={ICON_SIZE} />}
		</Box>
	);
}
