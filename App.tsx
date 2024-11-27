import { StyleSheet, View } from 'react-native';
import { LoginScreen } from './src/screen';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from '@theme';

export default function App() {
	return (
		<View style={styles.container}>
			<ThemeProvider theme={theme}>
				<LoginScreen />
			</ThemeProvider>
		</View>
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
