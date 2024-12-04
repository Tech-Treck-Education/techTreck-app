import {
	FlatList,
	ListRenderItemInfo,
	StyleProp,
	ViewStyle
} from 'react-native';

import { Box, CardRanking, Header, Screen, Text, TopThree } from '@components';

interface Ranking {
	id: number;
	name: string;
	xp: number;
	imageURL: string;
}

const ranking: Ranking[] = [
	{
		id: 1,
		name: 'John Doe',
		xp: 2340,
		imageURL:
			'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		id: 2,
		name: 'Jane Doe',
		xp: 2340,
		imageURL:
			'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		id: 3,
		xp: 2340,
		name: 'John Doe',
		imageURL:
			'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		id: 4,
		xp: 2340,
		name: 'John Doe',
		imageURL:
			'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		id: 5,
		xp: 2340,
		name: 'John Doe',
		imageURL:
			'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		id: 6,
		xp: 2340,
		name: 'John Doe',
		imageURL:
			'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		id: 7,
		xp: 2340,
		name: 'John Doe',
		imageURL:
			'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		id: 8,
		xp: 2340,
		name: 'John Doe',
		imageURL:
			'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		id: 9,
		xp: 2340,
		name: 'John Doe',
		imageURL:
			'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	}
];

export function RankingScreen() {
	function renderItem({ item }: ListRenderItemInfo<Ranking>) {
		return (
			<Box paddingHorizontal="s16">
				<CardRanking title={item.name} img={item.imageURL} px={item.xp} />
			</Box>
		);
	}
	return (
		<Screen style={$screen}>
			<FlatList
				data={ranking}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={
					<>
						<Header />
						<Text
							preset="headingMedium"
							textAlign="center"
							mb="s24"
							style={{ fontWeight: '700' }}
						>
							Ranking semanal
						</Text>
						<TopThree />
					</>
				}
			/>
		</Screen>
	);
}
const $screen: StyleProp<ViewStyle> = {
	paddingTop: 0,
	paddingBottom: 0,
	paddingHorizontal: 0,
	flex: 1
};
