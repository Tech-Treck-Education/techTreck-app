import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from '@theme';
import { LoginScreen, OnboardingScreen } from '@screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Router } from '@routes';
import { AuthProvider } from 'src/context/Auth';

export default function App() {
	return (
		<AuthProvider>
			<SafeAreaProvider>
				<ThemeProvider theme={theme}>
					<Router />
				</ThemeProvider>
			</SafeAreaProvider>
		</AuthProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
