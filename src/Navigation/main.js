import {
	HomeScreen,
	ProductDetailScreen,
	ProductsScreen,
} from '../Screens/index';

import { HeaderTitle } from '../Components/index';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme from '../../Constants/theme';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Home'
				component={HomeScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='Products'
				component={ProductsScreen}
				options={({ route }) => ({
					headerTitle: () => <HeaderTitle>{route.params.name}</HeaderTitle>,
					headerStyle: {
						backgroundColor: theme.colors.primary,
					},
				})}
			/>
			<Stack.Screen
				name='ProductDetail'
				component={ProductDetailScreen}
				options={() => ({
					headerTitle: () => <HeaderTitle>¡Hacé tu pedido!</HeaderTitle>,
					headerStyle: {
						backgroundColor: theme.colors.primary,
					},
				})}
			/>
		</Stack.Navigator>
	);
};

export default MainNavigator;
