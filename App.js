import React, { useState } from 'react';

import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import Root from './src/index';
import store from './src/Store/index';
import theme from './Constants/theme';
import { useFonts } from 'expo-font';

export default function App() {
	const [user, setUser] = useState(false);
	const [loaded] = useFonts({
		Inter: require('./assets/fonts/inter/Inter-Regular.ttf'),
		InterBold: require('./assets/fonts/inter/Inter-Bold.ttf'),
		InterExtraBold: require('./assets/fonts/inter/Inter-ExtraBold.ttf'),
	});

	if (!loaded) {
		return <ActivityIndicator size='large' color={theme.colors.primary} />;
	}

	return (
		<Provider store={store}>
			<Root />
		</Provider>
	);
}
