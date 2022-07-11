import { loginTypes } from '../Types/login.types';

const { SIGN_UP, SIGN_IN, SIGN_OUT } = loginTypes;

const initialState = {
	token: null,
	userId: null,
};

const LoginReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIGN_UP:
			return {
				...state,
				token: action.token,
				userId: action.userId,
			};
		case SIGN_IN:
			return {
				...state,
				token: action.token,
				userId: action.userId,
			};

		case SIGN_OUT:
			return { ...state, token: action.token, userId: action.userId };
		default:
			return state;
	}
};

export default LoginReducer;
