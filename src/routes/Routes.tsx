import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { ActivityIndicator, Box } from '@components';

import { AuthStack } from './AuthStack';
import { OnboardingStack } from './OnboardingStack';
import { AppStack } from './AppStack';

function LoadingScreen() {
	return (
		<Box
			flex={1}
			backgroundColor="background"
			justifyContent="center"
			alignItems="center"
		>
			<ActivityIndicator size="large" />
		</Box>
	);
}

const stacks = {
	Loading: <LoadingScreen />,
	Auth: <AuthStack />,
	App: <AppStack />,
	Onboarding: <OnboardingStack />
};

export function Router() {
	return <NavigationContainer>{stacks.Auth}</NavigationContainer>;
}
