import { OrderContainer } from '../Screens/index';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
	return (
		<Stack.Navigator initialRouteName='Order'>
			<Stack.Screen
				name='Order'
				options={{
					headerShown: false,
				}}
				component={OrderContainer}
			/>
		</Stack.Navigator>
	);
};

export default OrderNavigator;
