import {
	URL_AUTH_SIGN_IN,
	URL_AUTH_SIGN_UP,
} from '../../../Constants/firebase';

import { loginTypes } from '../Types/login.types';

const { SIGN_UP, SIGN_IN } = loginTypes;

export const signup = (email, password) => {
	return async (dispatch) => {
		try {
			const response = await fetch(URL_AUTH_SIGN_UP, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					password,
					returnSecureToken: true,
				}),
			});
			const data = await response.json();
			console.log('data Firebase', data);
			dispatch({
				type: SIGN_UP,
				token: data.idToken,
				userId: data.localId,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const signin = (email, password) => {
	return async (dispatch) => {
		try {
			const response = await fetch(URL_AUTH_SIGN_IN, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					password,
					returnSecureToken: true,
				}),
			});
			const data = await response.json();
			console.log('data Firebase', data);
			dispatch({
				type: SIGN_IN,
				token: data.idToken,
				userId: data.localId,
			});
		} catch (error) {
			console.log(error);
		}
	};
};
