import { OrdersScreen, ProfileScreen } from '../Screens/index';

import { HeaderTitle } from '../Components';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './styles';
import theme from '../../Constants/theme';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
	return (
		<Stack.Navigator initialRouteName='Profile'>
			<Stack.Screen
				name='Order'
				options={{
					headerTitle: (props) => <HeaderTitle>Mis pedidos</HeaderTitle>,
					headerStyle: {
						backgroundColor: theme.colors.primary,
					},
				}}
				component={OrdersScreen}
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
