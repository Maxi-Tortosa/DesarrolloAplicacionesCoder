import {
	CartContainer,
	HomeContainer,
	LoginContainer,
	ProductsContainer,
} from '../Screens/index';

import React from 'react';
import { StyledText } from '../Components/index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './styles';
import theme from '../../Constants/theme';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Home'
				component={HomeContainer}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='Products'
				component={ProductsContainer}
				options={{
					headerStyle: {
						backgroundColor: theme.colors.primary,
					},
				}}
			/>
		</Stack.Navigator>
	);
};

export default MainNavigator;
