import CartNavigator from './cart';
import IonicIcons from '@expo/vector-icons/Ionicons';
import MainNavigator from './main';
import ProfileNavigator from './profile';
import React from 'react';
import StyledText from './../Components/StyledText/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from '../../Constants/theme';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
	return (
		<BottomTabs.Navigator
			initialRouteName='HomeScreen'
			screenOptions={{
				headerShown: false,
			}}>
			<BottomTabs.Screen
				name='HomeScreen'
				component={MainNavigator}
				options={{
					tabBarLabel: ({ focused }) => (
						<StyledText
							style={
								focused
									? { fontWeight: 'bold', fontSize: 12 }
									: { fontSize: 12 }
							}
							font='inter'>
							Productos
						</StyledText>
					),
					tabBarIcon: ({ focused }) => (
						<IonicIcons
							name={focused ? 'basket' : 'basket-outline'}
							size={20}
							color={theme.colors.primary}
						/>
					),
				}}
			/>
			<BottomTabs.Screen
				name='CartScreen'
				component={CartNavigator}
				options={{
					tabBarLabel: ({ focused }) => (
						<StyledText
							style={
								focused
									? { fontWeight: 'bold', fontSize: 12 }
									: { fontSize: 12 }
							}
							font='inter'>
							Carrito
						</StyledText>
					),
					tabBarIcon: ({ focused }) => (
						<IonicIcons
							name={focused ? 'cart' : 'cart-outline'}
							size={20}
							color={theme.colors.primary}
						/>
					),
				}}
			/>

			<BottomTabs.Screen
				name='ProfileScreen'
				component={ProfileNavigator}
				options={{
					tabBarLabel: ({ focused }) => (
						<StyledText
							style={
								focused
									? { fontWeight: 'bold', fontSize: 12 }
									: { fontSize: 12 }
							}
							font='inter'>
							Perfil
						</StyledText>
					),
					tabBarIcon: ({ focused }) => (
						<IonicIcons
							name={focused ? 'person' : 'person-outline'}
							size={20}
							color={theme.colors.primary}
						/>
					),
				}}
			/>
		</BottomTabs.Navigator>
	);
};

export default TabNavigator;
