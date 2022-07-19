import AppNavigator from './Navigation/index';
import { Provider } from 'react-redux/';
import React from 'react';
import { init } from './db';
import store from './Store/index';

init()
	.then(() => {})
	.catch((err) => {
		console.log('Error initializing DB', err);
	});

const Root = () => {
	return (
		<Provider store={store}>
			<AppNavigator />
		</Provider>
	);
};

export default Root;
