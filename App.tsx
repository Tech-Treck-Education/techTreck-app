import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from '@theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Router } from '@routes';
import { AuthProvider } from 'src/context/Auth';
import { Toast } from '@components';
import { OnboardingProvider } from '@context';

export default function App() {
	return (
		<AuthProvider>
			<OnboardingProvider>
				<SafeAreaProvider>
					<ThemeProvider theme={theme}>
						<Router />
						<Toast />
					</ThemeProvider>
				</SafeAreaProvider>
			</OnboardingProvider>
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
