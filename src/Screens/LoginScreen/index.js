import {
	Dimensions,
	Image,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import {
	Input,
	RegisterModal,
	StyledButton,
	StyledText,
} from '../../Components/index';
import React, { useReducer, useState } from 'react';
import {
	formReducer,
	initialState,
	onCleanForm,
	onFocusOut,
	onInputChange,
} from '../../Utils/form';

import { signin } from '../../Store/Actions/login.actions';
import { styles } from './styles';
import theme from '../../../Constants/theme';
import { useDispatch } from 'react-redux';
import { useIsSmallDevice } from '../../Utils/hooks';

const LoginScreen = ({ navigation }) => {
	const [isRegister, setIsRegister] = useState(false);
	const [formState, dispatchFormState] = useReducer(formReducer, initialState);
	const dispatch = useDispatch();
	const isSmallDevice = useIsSmallDevice();

	const onHandleChange = (text, type) => {
		onInputChange(type, text, dispatchFormState, formState);
	};

	const onBlurInput = (text, type) => {
		onFocusOut(type, text, dispatchFormState, formState);
	};

	const handleModal = () => {
		setIsRegister(!isRegister);
		onCleanForm(dispatchFormState);
	};

	const onHandlerLogin = () => {
		dispatch(signin(formState.email.value, formState.password.value));
	};

	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			keyboardVerticalOffset={30}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<ScrollView style={styles.scrollContainer}>
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
							onEndEditing={(e) => onBlurInput(e.nativeEvent.text, 'email')}
							value={formState.email.value}
							hasError={formState.email.hasError}
							error={formState.email.error}
							touched={formState.email.touched}
							label='Ingresá tu email'
						/>
						<Input
							placeholder='******'
							autoCapitalize='none'
							autoCorrect={false}
							secureTextEntry={true}
							onChangeText={(text) => onHandleChange(text, 'password')}
							onEndEditing={(e) => onBlurInput(e.nativeEvent.text, 'password')}
							value={formState.password.value}
							hasError={formState.password.hasError}
							error={formState.password.error}
							touched={formState.password.touched}
							label='Ingresá tu password'
						/>
						<StyledButton
							style={styles.buttonIngresar}
							text='Ingresar'
							onPressEvent={onHandlerLogin}
							fontSize={
								!isSmallDevice
									? theme.fontSize.titleS
									: theme.fontSize.titleS - 2
							}
							disabled={
								!formState.email.hasError & !formState.password.hasError
									? false
									: true
							}
						/>
						<StyledText style={styles.questionText} font='interBold'>
							¿No tenés cuenta?
						</StyledText>
						<StyledButton
							style={styles.buttonRegister}
							fontSize={
								!isSmallDevice
									? theme.fontSize.titleS
									: theme.fontSize.titleS - 2
							}
							text='Registrate'
							onPressEvent={handleModal}
						/>
						{isRegister && (
							<RegisterModal
								onBlur={onBlurInput}
								formState={formState}
								handleChange={onHandleChange}
								isRegister={isRegister}
								onPressEvent={handleModal}
							/>
						)}
					</View>
				</ScrollView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default LoginScreen;
