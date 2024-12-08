import { Box, Button, Screen, Text } from '@components';
import { Course, Trail } from '../HomeScreen/HomeScreen';
import { Image, Linking } from 'react-native';

export function ProjectDetailsScreen() {
	return (
		<Screen canGoBack flex={1} scrollable>
			<Text color="bluePrimary" preset="headingLarge">
				Calculadora
			</Text>
			<Text mt="s24">
				Neste projeto você vai criar uma calculadora simples utilizando HTML,
				CSS e JavaScript.
			</Text>
			<Button
				title="Vamos lá!"
				backgroundColor="blueTertiaryLight"
				mt="s60"
				onPress={() => {
					Linking.openURL('https://playcode.io/javascript');
				}}
			/>
		</Screen>
	);
}
