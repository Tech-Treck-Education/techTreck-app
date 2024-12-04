import { Box, Button, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';
import { useCallback, useState } from 'react';
import { RefreshControl } from 'react-native';
import { HeaderProfile } from './components/HeaderProfile';

export function ProfileScreen() {
	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = useCallback(() => {
		setRefreshing(true);
	}, []);

	function navigateTo() {}

	return (
		<Screen
			scrollable
			refreshControl={
				<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
			}
		>
			<HeaderProfile imageURL="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

			<Text preset="headingSmall" textAlign="center" paddingHorizontal="s24">
				John Doe
			</Text>

			<Box mt="s40">
				<Text preset="headingSmall" mb="s10">
					Sobre mim
				</Text>
				<Text preset="paragraphSmall" textAlign="justify">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					malesuada, dolor id ultricies ultricies, nunc nunc ultricies
					ultricies, nunc nunc ultricies ultricies, nunc nunc ultricies
					ultricies, nunc nunc ultricies ultricies, nunc nunc ultricies
				</Text>
			</Box>
			<Button
				title="Editar perfil"
				preset="outline"
				mt="s24"
				onPress={navigateTo}
			/>
		</Screen>
	);
}
