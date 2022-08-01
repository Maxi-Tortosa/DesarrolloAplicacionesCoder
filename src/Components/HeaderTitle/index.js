import React from 'react';
import StyledText from '../StyledText';
import { View } from 'react-native';
import { styles } from './styles';

const HeaderTitle = ({ contStyle, textStyle, children }) => {
	return (
		<View style={{ ...contStyle, ...styles.headerContainer }}>
			<StyledText
				font='interBold'
				style={{ ...textStyle, ...styles.headerText }}
				lines={1}
				ellipsis='tail'>
				{children}
			</StyledText>
		</View>
	);
};

export default HeaderTitle;
