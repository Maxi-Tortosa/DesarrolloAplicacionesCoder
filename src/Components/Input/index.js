import { TextInput, View } from 'react-native';

import Label from '../Label';
import React from 'react';
import { StyledText } from '../StyledText/index';
import { styles } from './styles';

const Input = ({
	placeholder,
	style,
	placeholderTextColor = '#212121',
	value,
	onChangeText,
	onBlur = () => null,
	onFocus = () => null,
	editable,
	maxLength,
	keyboardType,
	...props
}) => {
	const onHandleChangeText = (text, type) => {
		onChangeText(text, type);
	};

	return (
		<View style={styles.container}>
			<Label {...props}>
				<TextInput
					{...props}
					placeholder={placeholder}
					style={{ ...styles.textInput, ...style }}
					placeholderTextColor={placeholderTextColor}
					value={value}
					onFocus={onFocus}
					onBlur={onBlur}
					onChangeText={onHandleChangeText}
					editable={editable}
					maxLength={maxLength}
					keyboardType={keyboardType}
				/>
			</Label>
			{/* <View style={styles.message}>
				<StyledText style={styles.helperText}>{}</StyledText>
			</View> */}
		</View>
	);
};

export default Input;
