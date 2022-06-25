import CartNavigator from './cart';
import IonicIcons from '@expo/vector-icons/Ionicons';
import MainNavigator from './main';
import OrderNavigator from './order';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from '../../Constants/theme';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
	return (
		<BottomTabs.Navigator
			initialRouteName='Home'
			screenOptions={{
				headerShown: false,
			}}>
			<BottomTabs.Screen
				name='HomeScreen'
				component={MainNavigator}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ focused }) => (
						<IonicIcons
							name={focused ? 'home' : 'home-outline'}
							size={20}
							color={focused ? theme.colors.primary : 'red'}
						/>
					),
				}}
			/>
			<BottomTabs.Screen
				name='CartScreen'
				component={CartNavigator}
				options={{
					tabBarLabel: 'Cart',
					tabBarIcon: ({ focused }) => (
						<IonicIcons
							name={focused ? 'cart' : 'cart-outline'}
							size={20}
							color={focused ? theme.colors.primary : 'red'}
						/>
					),
				}}
			/>

			<BottomTabs.Screen
				name='OrderScreen'
				component={OrderNavigator}
				options={{
					tabBarLabel: 'Order',
					tabBarIcon: ({ focused }) => (
						<IonicIcons
							name={focused ? 'cart' : 'cart-outline'}
							size={20}
							color={focused ? theme.colors.primary : 'red'}
						/>
					),
				}}
			/>
		</BottomTabs.Navigator>
	);
};

export default TabNavigator;
