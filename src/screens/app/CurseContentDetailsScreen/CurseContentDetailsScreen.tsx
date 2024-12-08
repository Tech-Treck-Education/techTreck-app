import { Box, Button, Image, Screen, Text } from '@components';
import { Course, Trail } from '../HomeScreen/HomeScreen';

export function CurseContentDetailsScreen({
	route
}: {
	route: { params: { trail: Trail } };
}) {
	const trail = route.params.trail;
	console.log(trail);
	return (
		<Screen canGoBack flex={1}>
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
			<Button
				title="Agora tente você"
				backgroundColor="blueTertiaryLight"
				mt="s32"
			/>
		</Screen>
	);
}
