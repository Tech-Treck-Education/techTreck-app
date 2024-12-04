import React from 'react';

import {
	BottomTabBarProps,
	createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import {
	HomeScreen,
	ProfileScreen,
	ProjectScreen,
	RankingScreen
} from '@screens';

import { AppTabBar } from './AppTabBar';

export type AppTabBottomTabParamList = {
	HomeScreen: undefined;
	ProjectScreen: undefined;
	RankingScreen: undefined;
	ProfileScreen: undefined;
};
const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppTabNavigator() {
	function renderTabBar(props: BottomTabBarProps) {
		return <AppTabBar {...props} />;
	}
	return (
		<Tab.Navigator
			tabBar={renderTabBar}
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					paddingTop: 20
				}
			}}
		>
			<Tab.Screen name="HomeScreen" component={HomeScreen} />
			<Tab.Screen name="ProjectScreen" component={ProjectScreen} />
			<Tab.Screen name="RankingScreen" component={RankingScreen} />
			<Tab.Screen name="ProfileScreen" component={ProfileScreen} />
		</Tab.Navigator>
	);
}
