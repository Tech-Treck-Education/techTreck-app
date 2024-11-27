import { ImageProps } from 'react-native';

import { images } from '@assets';

export type OnboardingPageItem = {
	title: Array<{ text: string; highlight: boolean }>;
	subtitle: string;
	image: {
		light: ImageProps['source'];
	};
	index: number;
	total: number;
	isLast: boolean;
};

type OnboardingPageItemWithoutMeta = Omit<
	OnboardingPageItem,
	'index' | 'total' | 'isLast'
>;

const page1: OnboardingPageItemWithoutMeta = {
	title: [
		{ text: 'Uma plataforma de', highlight: false },
		{ text: '\naprendizado gamificado', highlight: true }
	],
	subtitle:
		'Aprenda no seu ritmo de forma totalmente personalizada e com muita interação.',
	image: {
		light: images.onboardingCapi1
	}
};

const page2: OnboardingPageItemWithoutMeta = {
	title: [
		{ text: 'Nossa plataforma se ', highlight: false },
		{ text: 'adapta', highlight: true },
		{ text: ' ao seu aprendizado', highlight: false }
	],
	subtitle: 'Temos textos e vídeos alinhados com que você está aprendendo ',
	image: {
		light: images.onboardingCapi2
	}
};

const page3: OnboardingPageItemWithoutMeta = {
	title: [
		{ text: 'Venha aprender', highlight: false },
		{ text: ' programação', highlight: true },
		{ text: ' com a', highlight: false },
		{ text: ' TechTreck', highlight: true }
	],
	subtitle:
		'A techTreck tem o prazer te de ajudar a aprender programação de forma divertida. ',
	image: {
		light: images.onboardingCapi3
	}
};

export const onboardingPages: OnboardingPageItem[] = [page1, page2, page3].map(
	(page, index, array) => ({
		...page,
		index,
		total: array.length,
		isLast: index + 1 === array.length
	})
);
