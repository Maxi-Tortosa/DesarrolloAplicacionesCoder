import {
	Image,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { Input, RegisterModal, StyledButton } from './../../Components/index';
import React, { useState } from 'react';

import { StyledText } from '../../Components/index';
import { signin } from './../../Store/Actions/login.actions';
import { styles } from './styles';
import { useDispatch } from 'react-redux';

const LoginContainer = ({ navigation }) => {
	const [isRegister, setIsRegister] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const onHandleChange = (text, type) => {
		if (type === 'email') setEmail(text);
		if (type === 'password') setPassword(text);
	};

	const handleOpen = () => {
		setIsRegister(!isRegister);
	};

	const onHandlerLogin = () => {
		dispatch(signin(email, password));
	};

	/*Hacer botón de sign out con url de sign out de la doc de restful */
	/*Cambiar de acuerdo a un estado si es login o register */
	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			keyboardVerticalOffset={30}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.container}>
					<Image
						source={require('./burgerImg.png')}
						style={styles.burgerImage}
					/>
					<StyledText style={styles.welcomeText} font='interExtraBold'>
						Bienvenidos a Lumaveggie
					</StyledText>
					<Input
						placeholder='example@gmail.com'
						autoCapitalize='none'
						autoCorrect={false}
						keyboardType='email-address'
						onChangeText={(text) => onHandleChange(text, 'email')}
						value={email}
					/>
					<Input
						placeholder='******'
						autoCapitalize='none'
						autoCorrect={false}
						secureTextEntry={true}
						onChangeText={(text) => onHandleChange(text, 'password')}
						value={password}
					/>
					<StyledButton text='Ingresar' onPressEvent={onHandlerLogin} />
					<StyledText style={styles.questionText} font='interBold'>
						¿No tenés cuenta?
					</StyledText>
					<StyledButton text='Registrate' onPressEvent={handleOpen} />
					{isRegister && (
						<RegisterModal
							email={email}
							password={password}
							handleChange={onHandleChange}
							isRegister={isRegister}
							onPressEvent={setIsRegister}
						/>
					)}
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default LoginContainer;
