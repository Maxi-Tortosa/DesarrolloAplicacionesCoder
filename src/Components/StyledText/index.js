import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

const StyledText = ({ children, font, style, lines, ellipsis }) => {
	return (
		<Text
			style={{ ...style, ...styles[font] }}
			numberOfLines={lines}
			ellipsizeMode={ellipsis}>
			{children}
		</Text>
	);
};

export default StyledText;
