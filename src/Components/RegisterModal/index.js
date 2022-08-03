import {
	Alert,
	Keyboard,
	Modal,
	Pressable,
	TouchableWithoutFeedback,
	View,
} from 'react-native';

import Input from '../Input';
import React from 'react';
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
	const { email, password, firstName } = formState;
	const dispatch = useDispatch();

	const handleSignUp = () => {
		if (formState.firstName.value.length < 6) {
			Alert.alert(
				'El campo Nombre está vacío o es incorrecto',
				'Ingresá un nombre con al menos 6 caracteres.',
				[
					{
						text: 'Ok',
					},
				]
			);
		} else {
			dispatch(
				signup(
					formState.email.value,
					formState.password.value,
					formState.firstName.value
				)
			);
		}
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
					<Input
						style={styles.input}
						placeholder='example'
						autoCapitalize='none'
						autoCorrect={false}
						onChangeText={(text) => handleChange(text, 'firstName')}
						onEndEditing={(e) => onBlur(e.nativeEvent.text, 'firstName')}
						value={formState.firstName.value}
						hasError={firstName.hasError}
						error={firstName.error}
						touched={formState.firstName.touched}
						label='Registrá tu nombre'
					/>
					<StyledButton
						disabled={
							!formState.email.hasError &
							!formState.password.hasError &
							!formState.firstName.hasError
								? false
								: true
						}
						style={styles.submitButton}
						text='Registrarse'
						backgroundColor={theme.colors.primary}
						fontColor='black'
						onPressEvent={handleSignUp}
					/>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	);
};

export default RegisterModal;
