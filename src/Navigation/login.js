import { LoginContainer } from '../Screens/index';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './styles';

const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
	return (
		<Stack.Navigator initialRouteName='LoginScreen'>
			<Stack.Screen
				name='LoginScreen'
				component={LoginContainer}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export default LoginNavigator;
