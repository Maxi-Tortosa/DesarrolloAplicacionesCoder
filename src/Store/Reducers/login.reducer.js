import { collection, onSnapshot } from 'firebase/firestore';

import { db } from '../../Firebase';
import { loginTypes } from '../Types/login.types';

const { SIGN_UP, SIGN_IN, SIGN_OUT, GET_CURRENTUSER } = loginTypes;

const initialState = {
	email: null,
	uid: null,
};

const LoginReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIGN_UP:
			return {
				...state,
				email: action.email,
				uid: action.uid,
			};
		case SIGN_IN:
			return {
				...state,
				email: action.email,
				uid: action.uid,
			};

		case SIGN_OUT:
			return {
				...state,
				email: action.token,
				uid: action.uid,
			};

		case GET_CURRENTUSER:
			if (action.email !== null) {
				return { ...state, email: action.email, uid: action.uid };
			}
		default:
			return state;
	}
};

export default LoginReducer;
