import { ActivityIndicator, View } from 'react-native';

import React from 'react';
import { styles } from './styles';

const Loader = ({ size, color }) => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size={size} color={color} />
		</View>
	);
};

export default Loader;
