import { Box, Button, Screen, Text } from '@components';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { RefreshControl } from 'react-native';
import { HeaderProfile } from './components/HeaderProfile';
import { ProfileSchema, profileSchema } from './profileSchema';


export function ProfileScreen() {
	const [refreshing, setRefreshing] = useState(false);

	const { control, formState, handleSubmit } = useForm<ProfileSchema>({
		resolver: zodResolver(profileSchema),
		defaultValues: {
			email: 'John Doe',
		},
		mode: 'onChange'
	});

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

			<Box mt="s32">
				<Text preset="paragraphLarge" textAlign="center" color="bluePrimary">
					Alterar Foto
				</Text>
			</Box>
			<Box mt="s8">
				
			</Box>

			<Button
				// loading={isLoading}
				disabled={!formState.isValid}
				mt="s48"
				title="Entrar"
			/>
		</Screen>
	);
}
