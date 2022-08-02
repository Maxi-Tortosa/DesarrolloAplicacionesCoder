import { TextInput, View } from 'react-native';

import Label from '../Label';
import React from 'react';
import StyledText from '../StyledText/index';
import { styles } from './styles';

const Input = ({
	editable,
	children,
	value,
	defaultValue,
	onChangeText,
	onFocus,
	onBlur,
	maxLength,
	placeholder,
	placeholderTextColor,
	keyboardType,
	hasError,
	error,
	touched,
	style,
	labelStyle,
	...props
}) => {
	return (
		<View style={styles.container}>
			<Label {...props} style={labelStyle}>
				<TextInput
					{...props}
					placeholder={placeholder}
					style={{ ...styles.textInput, ...style }}
					placeholderTextColor={placeholderTextColor}
					value={value}
					defaultValue={defaultValue}
					onFocus={onFocus}
					onBlur={onBlur}
					onChangeText={onChangeText}
					editable={editable}
					maxLength={maxLength}
					keyboardType={keyboardType}
				/>
			</Label>
			{hasError && touched && error && (
				<View style={styles.message}>
					<StyledText style={styles.helperText} font='inter'>
						{error}
					</StyledText>
				</View>
			)}
		</View>
	);
};

export default Input;
