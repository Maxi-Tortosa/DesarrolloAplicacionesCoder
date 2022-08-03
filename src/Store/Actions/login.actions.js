import * as FileSystem from 'expo-file-system';

import {
	addDoc,
	collection,
	doc,
	onSnapshot,
	updateDoc,
} from 'firebase/firestore';
import { auth, db } from './../../Firebase/index';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';

import { Alert } from 'react-native';
import { loginTypes } from '../Types/login.types';

const { SIGN_UP, SIGN_IN, SIGN_OUT, GET_CURRENTUSER } = loginTypes;

export const getCurrentUser = () => {
	return async (dispatch) => {
		auth.onAuthStateChanged((user) => {
			user !== null &&
				dispatch({ type: GET_CURRENTUSER, email: user.email, uid: user.uid });
		});
	};
};

export const signout = () => {
	return async (dispatch) => {
		signOut(auth);

		dispatch({
			type: SIGN_OUT,
			email: null,
			uid: null,
		});
	};
};
export const signup = (email, password) => {
	return async (dispatch) => {
		const ref = collection(db, 'Users');

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				dispatch({
					type: SIGN_UP,
					email: email,
					uid: userCredential.user.uid,
				});

				addDoc(ref, {
					email,
					password,
					uid: userCredential.user.uid,
					profilePicture: null,
				});
			})
			.catch((error) => {
				console.log(error.message);
				if (error.message === 'Firebase: Error (auth/invalid-email).') {
					Alert.alert(
						'El campo Email está vacío',
						'Ingrese su email con el siguiente formato: example@example.com',
						[
							{
								text: 'Ok',
							},
						]
					);
				}

				if (error.message === 'Firebase: (auth/email-already-in-use).') {
					Alert.alert(
						'El usuario ya existe',
						'Ingrese un correo electrónico diferente',
						[
							{
								text: 'Ok',
							},
						]
					);
				}
				if (error.message === 'Firebase: Error (auth/internal-error).') {
					Alert.alert(
						'El campo Password está vacío',
						'Ingresá los datos nuevamente',
						[
							{
								text: 'Ok',
							},
						]
					);
				}
				if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
					Alert.alert('El usuario ya existe', 'Ingresá un usuario diferente', [
						{
							text: 'Ok',
						},
					]);
				}
			});
	};
};

export const signin = (email, password) => {
	return async (dispatch) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				dispatch({
					type: SIGN_IN,
					email: email,
					uid: userCredential.user.uid,
				});
			})
			.catch((error) => {
				console.log(error.message);
				if (error.message === 'Firebase: Error (auth/invalid-email).') {
					console.log(email);
					Alert.alert(
						'El campo Email está vacío',
						'Ingrese su email con el siguiente formato: example@example.com',
						[
							{
								text: 'Ok',
							},
						]
					);
				}
				if (error.message === 'Firebase: Error (auth/wrong-password).') {
					Alert.alert('Contraseña incorrecta', 'Ingresá los datos nuevamente', [
						{
							text: 'Ok',
						},
					]);
				}
				if (error.message === 'Firebase: Error (auth/user-not-found).') {
					Alert.alert('Usuario inexistente', 'Revisá el email ingresado', [
						{
							text: 'Ok',
						},
					]);
				}
				if (error.message === 'Firebase: Error (auth/internal-error).') {
					Alert.alert(
						'El campo Password está vacío',
						'Ingresá los datos nuevamente',
						[
							{
								text: 'Ok',
							},
						]
					);
				}
			});
	};
};

export const setProfilePicture = (image, userId, docId) => {
	return async () => {
		const fileName = image.split('/').pop();
		const Path = FileSystem.documentDirectory + fileName;

		try {
			await FileSystem.moveAsync({
				from: image,
				to: Path,
			});

			const ref = doc(collection(db, 'Users'), docId);
			updateDoc(ref, { profilePicture: Path });
		} catch (error) {
			console.log(error.message);
			throw error;
		}
	};
};
