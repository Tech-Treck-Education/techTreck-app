import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
	ForgotPasswordFillCodeScreen,
	ForgotPasswordScreen,
	LoginScreen,
	SignUpBasicDataScreen,
	SignUpChooseAreaProgrammingScreen,
	SignUpChooseProgramminglevelScreen,
	SignUpChooseStudyTimeScreen,
	SignUpPlanScreen
} from '@screens';

export type AuthStackParamList = {
	LoginScreen: undefined;
	ForgotPasswordScreen: undefined;
	ForgotPasswordFillCodeScreen: undefined;
	SignUpBasicDataScreen: undefined;
	SignUpChooseProgramminglevelScreen: undefined;
	SignUpChooseAreaProgrammingScreen: undefined;
	SignUpChooseStudyTimeScreen: undefined;
	SignUpPlanScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				fullScreenGestureEnabled: true
			}}
			initialRouteName="LoginScreen"
		>
			<Stack.Screen
				name="ForgotPasswordScreen"
				component={ForgotPasswordScreen}
			/>
			<Stack.Screen
				name="ForgotPasswordFillCodeScreen"
				component={ForgotPasswordFillCodeScreen}
			/>
			<Stack.Screen name="LoginScreen" component={LoginScreen} />
			<Stack.Screen
				name="SignUpBasicDataScreen"
				component={SignUpBasicDataScreen}
			/>
			<Stack.Screen
				name="SignUpChooseProgramminglevelScreen"
				component={SignUpChooseProgramminglevelScreen}
			/>
			<Stack.Screen
				name="SignUpChooseAreaProgrammingScreen"
				component={SignUpChooseAreaProgrammingScreen}
			/>
			<Stack.Screen
				name="SignUpChooseStudyTimeScreen"
				component={SignUpChooseStudyTimeScreen}
			/>
			<Stack.Screen
				name="SignUpPlanScreen"
				component={SignUpPlanScreen}
			/>
		</Stack.Navigator>
	);
}
