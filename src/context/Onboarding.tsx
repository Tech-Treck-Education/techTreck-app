import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, createContext, ReactNode, useEffect } from 'react';

interface OnboardingProviderProps {
	children: ReactNode;
}

interface OnboardingContextType {
	showOnboarding: boolean;
	hideOnboarding: () => void;
	setShowOnboarding: (show: boolean) => void;
}

const OnboardingContext = createContext<OnboardingContextType>({
	showOnboarding: true,
	hideOnboarding: () => {},
	setShowOnboarding: () => {}
});

function OnboardingProvider({ children }: OnboardingProviderProps) {
	const [showOnboarding, setShowOnboarding] = useState(true);

	useEffect(() => {
		const checkOnboardingStatus = async () => {
			const hasSeenOnboarding = await AsyncStorage.getItem('hasSeenOnboarding');
			if (hasSeenOnboarding) {
				setShowOnboarding(true);
			}
		};

		checkOnboardingStatus();
	}, []);

	const hideOnboarding = async () => {
		await AsyncStorage.setItem('hasSeenOnboarding', 'true');
		setShowOnboarding(false);
	};

	return (
		<OnboardingContext.Provider
			value={{ showOnboarding, hideOnboarding, setShowOnboarding }}
		>
			{children}
		</OnboardingContext.Provider>
	);
}

export { OnboardingProvider, OnboardingContext };
