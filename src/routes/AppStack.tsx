import React from 'react';

import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
	SettingsScreen,
	Trail,
	TrailDetailsScreen,
	Course,
	CurseContentDetailsScreen
} from '@screens';

import { AppTabBottomTabParamList, AppTabNavigator } from './AppTabNavigator';

export type AppStackParamList = {
	AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
	SettingsScreen: undefined;
	TrailDetailsScreen: {
		trail: Trail;
	};
	CurseContentDetailsScreen: {
		trail: Trail;
	};
};

const Stack = createNativeStackNavigator<AppStackParamList>();

interface Props {
	initialRouteName?: keyof AppStackParamList;
}
export function AppStack({ initialRouteName = 'AppTabNavigator' }: Props) {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				fullScreenGestureEnabled: true
			}}
			initialRouteName={initialRouteName}
		>
			<Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
			<Stack.Screen name="SettingsScreen" component={SettingsScreen} />
			<Stack.Screen name="TrailDetailsScreen" component={TrailDetailsScreen} />
			<Stack.Screen
				name="CurseContentDetailsScreen"
				component={CurseContentDetailsScreen}
			/>
		</Stack.Navigator>
	);
}
