import React, { useContext } from 'react';

import { useNavigation } from '@react-navigation/native';

import { useAppSafeArea } from '@hooks';

import { Box, BoxProps } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { Image } from '../Image/Image';
import { Text } from '../Text/Text';
import { AuthContext } from '@context';

export function Header() {
	const { credentials } = useContext(AuthContext);

	const { top } = useAppSafeArea();

	return (
		<Box {...$wrapper} style={{ paddingTop: top }}>
			<Box flexDirection="row" justifyContent="space-between" width="100%">
				<Icon name="logo" size={24} />
				<Box flexDirection="row">
					<Box mr="s24" alignItems="center">
						<Text color="yellowSecondary">XP</Text>
						<Text>{credentials.user.score}</Text>
					</Box>
					<Image
						imageURL="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						height={40}
						width={40}
						borderRadius={20}
					/>
				</Box>
			</Box>
		</Box>
	);
}

const $wrapper: BoxProps = {
	flexDirection: 'row',

	justifyContent: 'space-between',
	paddingBottom: 's24',
	paddingHorizontal: 's24'
};
