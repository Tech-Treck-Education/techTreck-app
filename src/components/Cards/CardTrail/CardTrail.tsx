import { Image, ImageSourcePropType } from 'react-native';
import { Box, PressableBox } from 'src/components/Box/Box';
import { Text } from 'src/components/Text/Text';

export function CardTrail({
	title,
	img,
	onpress
}: {
	title: string;
	img: ImageSourcePropType;
	onpress: () => void;
}) {
	return (
		<PressableBox
			onPress={onpress}
			height={200}
			backgroundColor="bluePrimary"
			borderRadius="s8"
			justifyContent="center"
			alignItems="flex-start"
			padding="s32"
			marginHorizontal="s24"
		>
			<Image source={img} />

			<Text
				color="grayWhite"
				fontWeight={'700'}
				preset="headingMedium"
				pt="s10"
			>
				{title}
			</Text>
			<Box
				bg="grayWhite"
				width={'100%'}
				height={30}
				mt="s20"
				justifyContent="center"
				paddingHorizontal="s10"
			>
				<Box width={'100%'} height={4} bg="redError" />
			</Box>
		</PressableBox>
	);
}
