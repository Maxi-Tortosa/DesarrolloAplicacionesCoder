const formatEmail =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const minPasswordLength = 6;

export const UPDATED_FORM = 'UPDATED_FORM';
export const CLEAN_FORM = 'CLEAN_FORM';

export const initialState = {
	email: { value: '', touched: false, hasError: false, error: '' },
	password: { value: '', touched: false, hasError: false, error: '' },
	firstName: { value: '', touched: false, hasError: false, error: '' },
	isFormValid: false,
};

export const formReducer = (state, action) => {
	switch (action.type) {
		case UPDATED_FORM:
			const { name, value, hasError, error, touched, isFormValid } =
				action.data;

			return {
				...state,
				[name]: {
					...state[name],
					value,
					hasError,
					error,
					touched,
				},
				isFormValid,
			};
		case CLEAN_FORM:
			return {
				...state,
				email: { value: '', touched: false, hasError: false, error: '' },
				password: { value: '', touched: false, hasError: false, error: '' },
				password: { value: '', touched: false, hasError: false, error: '' },
			};
		default:
			return state;
	}
};

export const validateInput = (name, value) => {
	let hasError = false;
	let error = '';

	switch (name) {
		case 'email':
			if (value.trim() === '') {
				hasError = true;
				error = 'El email es requerido';
			} else if (!formatEmail.test(value)) {
				hasError = true;
				error = 'El email es inválido';
			} else {
				hasError = false;
				error = '';
			}
			break;
		case 'password':
			if (value.trim() === '') {
				hasError = true;
				error = 'El Password es requerido';
			} else if (value.length < minPasswordLength) {
				hasError = true;
				error = `El Password debe contener al menos ${minPasswordLength} caracteres`;
			} else {
				hasError = false;
				error = '';
			}
			break;

		case 'firstName':
			if (value.trim() === '') {
				hasError = true;
				error = 'El Nombre es requerido';
			} else if (value.length < minPasswordLength) {
				hasError = true;
				error = `El Nombre debe contener al menos ${minPasswordLength} caracteres`;
			} else {
				hasError = false;
				error = '';
			}
			break;

		default:
			break;
	}
	return { hasError, error };
};

export const onInputChange = (name, value, dispatch, formState) => {
	const { hasError, error } = validateInput(name, value);

	let isFormValid = true;

	for (const key in formState) {
		const item = formState[key];
		if (key === name && hasError) {
			isFormValid = false;
			break;
		} else if (key !== name && item.hasError) {
			isFormValid = false;
			break;
		}
	}

	dispatch({
		type: UPDATED_FORM,
		data: {
			name,
			value,
			hasError,
			error,
			touched: false,
			isFormValid,
		},
	});
};

export const onFocusOut = (name, value, dispatch, formState) => {
	const { hasError, error } = validateInput(name, value);
	let isFormValid = true;

	for (const key in formState) {
		const item = formState[key];
		if (key === name && hasError) {
			isFormValid = false;
			break;
		} else if (key !== name && item.hasError) {
			isFormValid = false;
			break;
		}
	}

	dispatch({
		type: UPDATED_FORM,
		data: {
			name,
			value,
			hasError,
			error,
			touched: true,
			isFormValid,
		},
	});
};

export const onCleanForm = (dispatch) => {
	dispatch({
		type: CLEAN_FORM,
	});
};
