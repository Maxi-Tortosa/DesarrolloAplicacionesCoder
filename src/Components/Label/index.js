import React from 'react';
import StyledText from './../StyledText/index';
import { View } from 'react-native';
import { styles } from './styles';

const Label = ({ children, style, label, subLabel, subLabelStyle }) => {
	return (
		<View style={styles.container}>
			<StyledText style={{ ...styles.label, ...style }} font='interBold'>
				{label}
			</StyledText>
			{children}
			{subLabel && (
				<StyledText style={{ ...styles.subLabel, ...subLabelStyle }}>
					{subLabel}
				</StyledText>
			)}
		</View>
	);
};

export default Label;
