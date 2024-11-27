import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AuthStackParamList } from './AuthStack';
import { OnboardingStackParamList } from './OnboardingStack';

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
	NativeStackScreenProps<AuthStackParamList, RouteName>;

export type OnboardingScreenProps<
	RouteName extends keyof OnboardingStackParamList
> = NativeStackScreenProps<OnboardingStackParamList, RouteName>;
