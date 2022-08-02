import { LoginScreen } from '../Screens/index';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './styles';

const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
	return (
		<Stack.Navigator initialRouteName='Login'>
			<Stack.Screen
				options={{
					headerShown: false,
				}}
				name='Login'
				component={LoginScreen}
			/>
		</Stack.Navigator>
	);
};

export default LoginNavigator;
