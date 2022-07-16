import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoginNavigator from './login';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabNavigator from './tab';
import { getCurrentUser } from '../Store/Actions/login.actions';

const AppNavigator = () => {
	const dispatch = useDispatch();
	const currentUser = useSelector((state) => state.login.email);

	useEffect(() => {
		dispatch(getCurrentUser());
	});

	return (
		<SafeAreaView style={{ flex: 1, margin: 0 }}>
			<NavigationContainer>
				{currentUser ? <TabNavigator /> : <LoginNavigator />}
			</NavigationContainer>
		</SafeAreaView>
	);
};

export default AppNavigator;
