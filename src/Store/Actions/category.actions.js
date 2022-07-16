import { collection, onSnapshot } from 'firebase/firestore';

import { categoryTypes } from '../Types/category.types';
import { db } from '../../Firebase/index';

const { SELECT_CATEGORY, GET_CATEGORIES } = categoryTypes;

export const selectCategory = (id) => ({
	type: SELECT_CATEGORY,
	categoryId: id,
});

export const getCategories = () => {
	return async (dispatch) => {
		onSnapshot(
			collection(db, 'Categorias'),
			(snapshot) =>
				dispatch({
					type: GET_CATEGORIES,
					payload: snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
				}),
			(error) => console.log(error)
		);
	};
};
