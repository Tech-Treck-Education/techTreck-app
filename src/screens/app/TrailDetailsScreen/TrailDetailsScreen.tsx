import { Box, Screen, Text } from '@components';
import { FlatList, Image, ListRenderItemInfo } from 'react-native';
import { images } from '../../../assets';
import { Course, Trail } from '../HomeScreen/HomeScreen';
export function TrailDetailsScreen({
	route
}: {
	route: { params: { trail: Trail } };
}) {
	const trail = route.params.trail;

	function renderItem({ item }: ListRenderItemInfo<Course>) {
		return (
			<Box
				flexDirection="row"
				justifyContent="space-between"
				bg="gray4"
				padding="s24"
			>
				<Text>{item.title}</Text>
				<Box width={30} height={30} bg="bluePrimary" />
			</Box>
		);
	}
	return (
		<Screen canGoBack flex={1}>
			<FlatList
				data={trail.course}
				contentContainerStyle={{ gap: 24 }}
				renderItem={renderItem}
				keyExtractor={(item) => item.toString()}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={
					<>
						<Image source={images.javascript} />
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
					</>
				}
			/>
		</Screen>
	);
}
