import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  ProfileScreen, EditProfileScreen } from '@screens';


export type ProfileStackParamList = {
    EditProfileScreen: undefined;
	  ProfileScreen: undefined;
};

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export function ProfileStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    </Stack.Navigator>
  );
}