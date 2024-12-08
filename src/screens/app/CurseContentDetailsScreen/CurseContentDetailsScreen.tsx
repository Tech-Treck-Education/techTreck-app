import { Box, Button, Screen, Text } from '@components';
import { Course, Trail } from '../HomeScreen/HomeScreen';
import { Image, Linking } from 'react-native';

export function CurseContentDetailsScreen({
	route
}: {
	route: { params: { trail: Trail } };
}) {
	const trail = route.params.trail;
	console.log(trail);
	return (
		<Screen canGoBack flex={1} scrollable>
			<Image source={trail.img} />
			<Text
				preset="headingMedium"
				color="bluePrimary"
				style={{ fontWeight: '700' }}
				mt="s12"
			>
				{trail.title}
			</Text>

			<Box
				bg="grayWhite"
				width={'100%'}
				height={30}
				mt="s20"
				justifyContent="center"
			>
				<Box width={'60%'} height={4} bg="redError" />
			</Box>
			<Text color="bluePrimary" preset="headingLarge">
				Arrays
			</Text>
			<Text mt="s24">
				Um Array trata-se de uma coleção ou conjunto de elementos de dados que
				são armazenados em uma memória, que pode ser chamada de constante ou
				variável.
				{'\n\n'}A sintaxe de um array tem diferentes formatos. A declaração
				direta ou representação literal é aquela em que o array é representado
				pelos símbolos de colchetes, que podem ou não conter elementos.
			</Text>
			<Text color="bluePrimary" mt="s24">
				{'\n\n'}
				// Declaração direta (array vazio)
				{'\n'}
				let meuArray = [];
				{'\n\n'}
				// Declaração com elementos
				{'\n'}
				let frutas = ['Maçã', 'Banana', 'Laranja'];
				{'\n\n'}
				// Acessando elementos
				{'\n'}
				console.log(frutas[1]); // Saída: Banana
				{'\n\n'}
			</Text>
			<Button
				title="Agora tente você"
				backgroundColor="blueTertiaryLight"
				mt="s32"
				onPress={() => {
					Linking.openURL('https://playcode.io/javascript');
				}}
			/>
		</Screen>
	);
}
