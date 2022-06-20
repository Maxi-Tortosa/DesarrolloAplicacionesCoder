import MainNavigator from './main';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<MainNavigator />
		</NavigationContainer>
	);
};

export default AppNavigator;
