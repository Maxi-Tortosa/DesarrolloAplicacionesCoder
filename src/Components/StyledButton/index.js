import { Text, TouchableOpacity } from 'react-native';

import React from 'react';
import { styles } from './styles.js';

const StyledButton = ({
	style,
	text,
	fontColor = null,
	backgroundColor = 'white',
	onPressEvent = null,
	prop,
}) => {
	const handleOnPress = (e) =>
		onPressEvent ? onPressEvent(e, text, prop) : null;

	return (
		<TouchableOpacity
			style={[
				styles.button,
				{ ...style },
				{ fontColor: fontColor },
				{ backgroundColor: backgroundColor },
			]}
			onPress={handleOnPress}>
			<Text>{text}</Text>
		</TouchableOpacity>
	);
};

export default StyledButton;
