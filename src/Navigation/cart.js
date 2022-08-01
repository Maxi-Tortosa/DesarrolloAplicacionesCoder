import { CartContainer } from '../Screens/index';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Cart' options={{}} component={CartContainer} />
		</Stack.Navigator>
	);
};

export default CartNavigator;
