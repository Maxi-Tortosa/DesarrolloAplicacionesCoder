import { Image, Text, View } from 'react-native';

import Input from '../../Components/Input';
import React from 'react';
import StyledButton from './../../Components/StyledButton/index';
import { styles } from './styles';

export default function LoginContainer() {
	return (
		<>
			<View style={styles.container}>
				<Image source={require('./burgerImg.png')} style={styles.burgerImage} />
				<Text style={styles.welcomeText}>Bienvenidos a Lumaveggie</Text>
				<Input placeholder='Introducí tu usuario' />
				<Input placeholder='Introducí tu contraseña' />
				<Text style={styles.questionText}>¿No tenés cuenta?</Text>
				<StyledButton text='Registrate' />
			</View>
		</>
	);
}
