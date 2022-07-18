import { OrderContainer, ProfileScreen } from '../Screens/index';

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme from '../../Constants/theme';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
	return (
		<Stack.Navigator initialRouteName='Profile'>
			<Stack.Screen
				name='Order'
				options={{
					title: 'Mis pedidos',
					headerStyle: {
						backgroundColor: theme.colors.primary,
					},
				}}
				component={OrderContainer}
			/>
			<Stack.Screen
				name='Profile'
				options={{
					headerShown: false,
				}}
				component={ProfileScreen}
			/>
		</Stack.Navigator>
	);
};

export default ProfileNavigator;
