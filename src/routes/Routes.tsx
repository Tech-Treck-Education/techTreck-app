import React, { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { ActivityIndicator, Box } from '@components';

import { AuthStack } from './AuthStack';
import { OnboardingStack } from './OnboardingStack';
import { AppStack } from './AppStack';
import { AuthContext } from 'src/context/Auth';
import { useRouter } from './useRouter';

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
	const stack = useRouter();
	const Stack = stacks[stack];

	return <NavigationContainer>{Stack}</NavigationContainer>;
}
