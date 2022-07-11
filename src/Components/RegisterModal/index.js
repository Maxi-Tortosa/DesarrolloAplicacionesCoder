import {
	Alert,
	Modal,
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
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
	email,
	password,
	handleChange,
	isRegister,
	onPressEvent,
}) => {
	const dispatch = useDispatch();

	const handleLogin = () => {
		dispatch(signup(email, password));
	};

	return (
		<Modal
			animationType='slide'
			transparent={true}
			visible={isRegister}
			onRequestClose={() => {
				onPressEvent();
			}}>
			<View style={styles.modalContainer}>
				<Pressable style={styles.closeButton} onPress={() => onPressEvent()}>
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
					label='Registrá tu email'
				/>
				<Input
					style={styles.input}
					placeholder='******'
					autoCapitalize='none'
					autoCorrect={false}
					secureTextEntry={true}
					onChangeText={(text) => handleChange(text, 'password')}
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
		</Modal>
	);
};

export default RegisterModal;
