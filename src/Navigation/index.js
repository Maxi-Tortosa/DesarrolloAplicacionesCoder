import React, { useState } from 'react';

import LoginNavigator from './login';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabNavigator from './tab';
import { useSelector } from 'react-redux';

const AppNavigator = () => {
	const currentUser =
		// false;

		useSelector((state) => state.login.userId);

	return (
		<SafeAreaView style={{ flex: 1, margin: 0 }}>
			<NavigationContainer>
				{currentUser ? <TabNavigator /> : <LoginNavigator />}
			</NavigationContainer>
		</SafeAreaView>
	);
};

export default AppNavigator;
