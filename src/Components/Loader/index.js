import { ActivityIndicator, View } from 'react-native';

import React from 'react';
import { styles } from './styles';

const Loader = ({ style, size, color }) => {
	return (
		<View style={{ ...styles.container, ...style }}>
			<ActivityIndicator size={size} color={color} />
		</View>
	);
};

export default Loader;
