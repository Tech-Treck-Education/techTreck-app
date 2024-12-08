import React from 'react';
import { Box, Screen, Text, TouchableOpacityBox } from '@components';
import { FlatList, Image, ListRenderItemInfo } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Course, Trail } from '../HomeScreen/HomeScreen';

export function TrailDetailsScreen({
	route
}: {
	route: { params: { trail: Trail } };
}) {
	const navigation = useNavigation();

	const trail = route.params.trail;

	function navigateToCurseDetailsScreen() {
		navigation.navigate('CurseContentDetailsScreen', { trail: trail });
	}

	function renderItem({ item }: ListRenderItemInfo<Course>) {
		return (
			<TouchableOpacityBox
				flexDirection="row"
				justifyContent="space-between"
				padding="s24"
				backgroundColor="gray5"
				onPress={navigateToCurseDetailsScreen}
			>
				<Text>{item.title}</Text>
				<Box width={30} height={30} bg="bluePrimary" />
			</TouchableOpacityBox>
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
					</>
				}
			/>
		</Screen>
	);
}
