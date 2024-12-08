import {
	FlatList,
	ListRenderItemInfo,
	StyleProp,
	ViewStyle
} from 'react-native';

import { CardProject, Header, Screen, Text } from '@components';
import { ThemeColors } from '@theme';
import { AppTabScreenProps } from '@routes';

interface Project {
	id: number;
	title: string;
	color: ThemeColors;
}
const projects: Project[] = [
	{
		id: 1,
		title: 'Calculadora',
		color: 'primary'
	},
	{
		id: 2,
		title: 'Pokédex',
		color: 'bluePrimaryLight'
	},
	{
		id: 3,
		title: 'GPS',
		color: 'primary'
	},
	{
		id: 4,
		title: 'Lista de tarefas',
		color: 'bluePrimaryLight'
	}
];
export function ProjectScreen({
	navigation
}: AppTabScreenProps<'ProfileScreen'>) {
	function navigateToEditProfileScreen() {
		navigation.navigate('ProjectDetailsScreen');
	}
	function renderItem({ item }: ListRenderItemInfo<Project>) {
		return (
			<CardProject
				title={item.title}
				color={item.color}
				onPress={navigateToEditProfileScreen}
			/>
		);
	}

	return (
		<Screen style={$screen}>
			<FlatList
				data={projects}
				contentContainerStyle={{ gap: 24 }}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={
					<>
						<Header />
						<Text
							preset="headingMedium"
							textAlign="center"
							style={{ fontWeight: '700' }}
						>
							Projetos
						</Text>
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
