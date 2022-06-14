import {
	Image,
	Keyboard,
	Text,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { Input, StyledButton } from './../../Components/index';

import React from 'react';
import { StyledText } from '../../Components/index';
import { styles } from './styles';

export default function LoginContainer({ setUser }) {
	const handleLogin = () => {
		setUser(true);
	};

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<Image source={require('./burgerImg.png')} style={styles.burgerImage} />
				<StyledText style={styles.welcomeText} font='interExtraBold'>
					Bienvenidos a Lumaveggie
				</StyledText>
				<Input
					placeholder='Introducí tu usuario'
					keyboardType='email-address'
				/>
				<Input placeholder='Introducí tu contraseña' />
				<StyledButton onPressEvent={handleLogin} text='Ingresar' />
				<StyledText style={styles.questionText} font='interBold'>
					¿No tenés cuenta?
				</StyledText>
				<StyledButton text='Registrate' />
			</View>
		</TouchableWithoutFeedback>
	);
}
