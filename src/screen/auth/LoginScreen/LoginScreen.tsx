import { Button, Text } from '@components';
import { View } from 'react-native';

export function LoginScreen() {
	return (
		<View>
			<Text color="error" preset="headingLarge">
				Login Screen
			</Text>
			<Button title="Login" />
		</View>
	);
}
