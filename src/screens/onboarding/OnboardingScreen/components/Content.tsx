import React from 'react';

import { Box, Button, ProgressIndicator, Text } from '@components';

import { OnboardingPageItem } from '../onboardingData';

type ContentProps = Omit<OnboardingPageItem, 'image'>;
export function Content({
	title,
	subtitle,
	total,
	index,
	isLast
}: ContentProps) {
	return (
		<Box>
			<ProgressIndicator
				total={total}
				currentIndex={index}
				marginBottom="s24"
			/>
			<Text preset="headingLarge">
				{title.map((text, _index) => (
					<Text
						key={_index}
						preset="headingLarge"
						fontSize={32}
						color={text.highlight ? 'yellowSecondary' : 'grayWhite'}
						bold
					>
						{text.text}
					</Text>
				))}
			</Text>
			<Text mt="s16" preset="paragraphLarge" fontSize={18}>
				{subtitle}
			</Text>

			{isLast && (
				<Button
					title="Vamos começar"
					backgroundColor="yellowSecondary"
					mt="s56"
				/>
			)}
		</Box>
	);
}
