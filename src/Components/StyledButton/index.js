import { Text, TouchableOpacity } from 'react-native';

import React from 'react';
import StyledText from './../StyledText/index';
import { styles } from './styles.js';

const StyledButton = ({
	style,
	text,
	fontColor,
	fontSize,
	backgroundColor = 'white',
	onPressEvent = null,
	prop,
	font = 'inter',
}) => {
	const handleOnPress = (e) =>
		onPressEvent ? onPressEvent(e, text, prop) : null;

	return (
		<TouchableOpacity
			style={{
				...styles.button,
				...style,
				backgroundColor: backgroundColor,
			}}
			onPress={handleOnPress}>
			<StyledText style={{ color: fontColor, fontSize: fontSize }} font={font}>
				{text}
			</StyledText>
		</TouchableOpacity>
	);
};

export default StyledButton;
