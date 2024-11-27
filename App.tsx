import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from '@theme';
import { LoginScreen } from '@screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
	return (
		<SafeAreaProvider>
			<ThemeProvider theme={theme}>
				<LoginScreen />
			</ThemeProvider>
		</SafeAreaProvider>
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
