import { Text, TouchableOpacity } from 'react-native';

import React from 'react';
import { styles } from './styles.js';

const Button = ({ style, text, fontColor, backgroundColor }) => {
	return (
		<TouchableOpacity style={styles.button} onPress={() => null}>
			<Text>{text}</Text>
		</TouchableOpacity>
	);
};

export default Button;
