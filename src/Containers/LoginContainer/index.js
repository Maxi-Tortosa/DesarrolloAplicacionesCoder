import { Image, Text, TouchableOpacity, View } from 'react-native';

import Button from './../../Components/Button/index';
import Input from '../../Components/Input';
import React from 'react';
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
				<Button text='Registrate' />
			</View>
		</>
	);
}
