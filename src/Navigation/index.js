import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from './../Components/Loader/index';
import LoginNavigator from './login';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabNavigator from './tab';
import { getCurrentUser } from '../Store/Actions/login.actions';
import theme from '../../Constants/theme';

const AppNavigator = () => {
	const dispatch = useDispatch();
	const [pending, setPending] = useState(true);
	const logged = useSelector((state) => state.login.uid);

	useEffect(() => {
		setTimeout(() => {
			dispatch(getCurrentUser());
			setPending(false);
		}, 1500);
	}, [logged]);

	return (
		<SafeAreaView style={{ flex: 1, margin: 0 }}>
			<NavigationContainer>
				{logged ? (
					pending ? (
						<Loader color={theme.colors.primary} size={55} />
					) : (
						<TabNavigator />
					)
				) : pending ? (
					<Loader color={theme.colors.primary} size={55} />
				) : (
					<LoginNavigator />
				)}
			</NavigationContainer>
		</SafeAreaView>
	);
};

export default AppNavigator;
