import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

const StyledText = ({ children, font, style }) => {
	return <Text style={{ ...style, ...styles[font] }}>{children}</Text>;
};

export default StyledText;
