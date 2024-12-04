import { ThemeColors } from '@theme';
import { PressableBox } from 'src/components/Box/Box';
import { Text } from 'src/components/Text/Text';

export function CardProject({
	title,
	color
}: {
	title: string;
	color: ThemeColors;
}) {
	return (
		<PressableBox
			// width={'100%'}
			height={150}
			backgroundColor={color}
			borderRadius="s8"
			justifyContent="center"
			alignItems="center"
			marginHorizontal="s24"
		>
			<Text color="grayWhite" preset="headingMedium">
				{title}
			</Text>
		</PressableBox>
	);
}
