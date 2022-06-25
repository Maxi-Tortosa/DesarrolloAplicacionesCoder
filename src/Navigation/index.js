import React, { useState } from 'react';

import LoginNavigator from './login';
import MainNavigator from './main';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabNavigator from './tab';

const AppNavigator = () => {
	const [currentUser, setCurrentUser] = useState(true);

	return (
		<SafeAreaView style={{ flex: 1, margin: 0 }}>
			<NavigationContainer>
				{currentUser ? <TabNavigator /> : <LoginNavigator />}
			</NavigationContainer>
		</SafeAreaView>
	);
};

export default AppNavigator;
