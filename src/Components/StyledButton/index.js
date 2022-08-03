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
	disabled = false,
}) => {
	const handleOnPress = (e) =>
		onPressEvent ? onPressEvent(e, text, prop) : null;

	return (
		<TouchableOpacity
			disabled={disabled}
			style={{
				...styles.button,
				...style,
				backgroundColor: backgroundColor,
			}}
			onPress={handleOnPress}>
			<StyledText
				style={{
					color: fontColor,
					fontSize: fontSize,
				}}
				font={font}>
				{text}
			</StyledText>
		</TouchableOpacity>
	);
};

export default StyledButton;
