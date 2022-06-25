import {
	Image,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
	ScrollView,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { Input, StyledButton } from './../../Components/index';

import React from 'react';
import { StyledText } from '../../Components/index';
import { styles } from './styles';

export default function LoginContainer({ navigation }) {
	const handlePress = () => {
		// navigation.navigate(
		// 	'Home'
		// );
		/* fijarse como se generó el tema del route.params.name en la clase 10 */
	};
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
						placeholder='Introducí tu usuario'
						keyboardType='email-address'
					/>
					<Input placeholder='Introducí tu contraseña' />
					<StyledButton text='Ingresar' onPressEvent={handlePress} />
					<StyledText style={styles.questionText} font='interBold'>
						¿No tenés cuenta?
					</StyledText>
					<StyledButton text='Registrate' />
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}
