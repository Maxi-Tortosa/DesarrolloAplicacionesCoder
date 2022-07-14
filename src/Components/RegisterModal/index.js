import {
	Keyboard,
	Modal,
	Pressable,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import React, { useState } from 'react';

import Input from '../Input';
import StyledButton from '../StyledButton';
import StyledText from './../StyledText/index';
import { signup } from '../../Store/Actions/login.actions';
import { styles } from './styles';
import theme from '../../../Constants/theme';
import { useDispatch } from 'react-redux';

const RegisterModal = ({
	onBlur,
	formState,
	handleChange,
	isRegister,
	onPressEvent,
}) => {
	const { email, password } = formState;
	const dispatch = useDispatch();

	const handleLogin = () => {
		dispatch(signup(formState.email.value, formState.password.value));
	};

	return (
		<Modal animationType='slide' transparent={true} visible={isRegister}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.modalContainer}>
					<Pressable style={styles.closeButton} onPress={onPressEvent}>
						<StyledText style={styles.closeButtonText} font='interBold'>
							Omitir
						</StyledText>
					</Pressable>
					<StyledText style={styles.titleText} font='interExtraBold'>
						Registrate ahora y realizá
					</StyledText>
					<StyledText style={styles.titleText2} font='interExtraBold'>
						tu primer pedido
					</StyledText>
					<Input
						style={styles.input}
						placeholder='example@gmail.com'
						autoCapitalize='none'
						autoCorrect={false}
						keyboardType='email-address'
						onChangeText={(text) => handleChange(text, 'email')}
						onEndEditing={(e) => onBlur(e.nativeEvent.text, 'email')}
						value={formState.email.value}
						hasError={email.hasError}
						error={email.error}
						touched={email.touched}
						label='Registrá tu email'
					/>
					<Input
						style={styles.input}
						placeholder='******'
						autoCapitalize='none'
						autoCorrect={false}
						secureTextEntry={true}
						onChangeText={(text) => handleChange(text, 'password')}
						onEndEditing={(e) => onBlur(e.nativeEvent.text, 'password')}
						value={formState.password.value}
						hasError={password.hasError}
						error={password.error}
						touched={formState.password.touched}
						label='Registrá tu password'
					/>
					<StyledButton
						style={styles.submitButton}
						text='Registrarse'
						backgroundColor={theme.colors.primary}
						fontColor='black'
						onPressEvent={handleLogin}
					/>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	);
};

export default RegisterModal;
