import { CardTrail, Header, Screen } from '@components';
import {
	FlatList,
	ImageSourcePropType,
	ListRenderItemInfo,
	StyleProp,
	ViewStyle
} from 'react-native';
import { AppTabScreenProps } from '@routes';

import { HomeTitle } from './components';
import { images } from '../../../assets';
export interface Trail {
	id: number;
	title: string;
	img: ImageSourcePropType;
	course: Course[];
}

export interface Course {
	id: number;
	title: string;
	questions: Question[];
}

export interface Question {
	id: number;
	question: string;
	answer: string;
}

const trail: Trail[] = [
	{
		id: 1,
		title: 'JavaScript',
		img: images.javascript,
		course: [
			{
				id: 1,
				title: 'Introdução',
				questions: [
					{
						id: 1,
						question: 'What is JavaScript?',
						answer:
							'JavaScript is a programming language that allows you to implement complex things on web pages.'
					},
					{
						id: 2,
						question: 'What are the data types supported by JavaScript?',
						answer: 'Number, String, Boolean, Object, Undefined, Null'
					}
				],
				
			},
			{
				id: 2,
				title: 'Exercícios',
				questions: [
					{
						id: 1,
						question: 'Lorem ipsum dolor sit amet.',
						answer:
							'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
					},
				],
				
			},
			{
				id: 3,
				title: 'Testes condicionais',
				questions: [
					{
						id: 1,
						question: 'Lorem ipsum dolor sit amet.',
						answer:
							'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
					},
				],
				
			},
			{
				id: 3,
				title: 'Laços de Repetição',
				questions: [
					{
						id: 1,
						question: 'Lorem ipsum dolor sit amet.',
						answer:
							'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
					},
				],
				
			},
			{
				id: 4,
				title: 'Arrays',
				questions: [
					{
						id: 1,
						question: 'Lorem ipsum dolor sit amet.',
						answer:
							'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
					},
				],
				
			}
		]
	}
];

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
	function navigateToTrailDetailsScreen({ trail }: { trail: Trail }) {
		navigation.navigate('TrailDetailsScreen', { trail });
	}

	function renderItem({ item }: ListRenderItemInfo<Trail>) {
		return (
			<CardTrail
				title={item.title}
				img={item.img}
				onpress={() => navigateToTrailDetailsScreen({ trail: item })}
			/>
		);
	}

	return (
		<Screen style={$screen}>
			<FlatList
				data={trail}
				contentContainerStyle={{ gap: 24 }}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={
					<>
						<Header />
						<HomeTitle />
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
