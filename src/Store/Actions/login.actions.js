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

import { loginTypes } from '../Types/login.types';

const { SIGN_UP, SIGN_IN, SIGN_OUT, GET_CURRENTUSER } = loginTypes;

export const getCurrentUser = () => {
	return async (dispatch) => {
		auth.onAuthStateChanged((user) => {
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
