import { Box } from 'src/components/Box/Box';
import { Image } from 'src/components/Image/Image';
import { Text } from 'src/components/Text/Text';

export function CardRanking({
	title,
	img,
	px
}: {
	title: string;
	img: string;
	px: number;
}) {
	return (
		<Box
			flexDirection="row"
			justifyContent="space-between"
			bg="gray4"
			padding="s12"
		>
			<Image imageURL={img} height={40} width={40} borderRadius={20} />
			<Text>{title}</Text>
			<Text>{px}xp</Text>
		</Box>
	);
}
