import React, { useContext, useRef, useState } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { Box } from '@components';

import { OnboardingPage } from './components/OnboardingPage';
import { OnboardingPageItem, onboardingPages } from './onboardingData';
import { OnboardingContext } from '@context';

export function OnboardingScreen() {
	const { hideOnboarding } = useContext(OnboardingContext);
	const [pageIndex, setPageIndex] = useState(0);

	const flatListRef = useRef<FlatList<OnboardingPageItem>>(null);

	function onPressNext() {
		const isLastPage = pageIndex === onboardingPages.length - 1;

		if (isLastPage) {
		} else {
			const nextIndex = pageIndex + 1;
			flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
			setPageIndex(nextIndex);
		}
	}

	function renderItem({ item }: ListRenderItemInfo<OnboardingPageItem>) {
		return (
			<OnboardingPage
				pageItem={item}
				onPressNext={onPressNext}
				onPressSkip={hideOnboarding}
			/>
		);
	}

	return (
		<Box flex={1} backgroundColor="background">
			<FlatList
				ref={flatListRef}
				scrollEnabled={false}
				showsHorizontalScrollIndicator={false}
				horizontal
				renderItem={renderItem}
				data={onboardingPages}
			/>
		</Box>
	);
}
