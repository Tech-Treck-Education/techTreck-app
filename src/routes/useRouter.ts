import { useContext } from 'react';

import { AuthContext, OnboardingContext } from '@context';

export type Stacks = 'Loading' | 'Auth' | 'App' | 'Onboarding';

export function useRouter(): Stacks {
	const { credentials } = useContext(AuthContext);
	const { showOnboarding } = useContext(OnboardingContext);

	if (showOnboarding) {
		return 'Onboarding';
	}

	if (credentials.token) {
		return 'App';
	}

	return 'Auth';
}
