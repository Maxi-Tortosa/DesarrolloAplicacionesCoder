import { categoryTypes } from '../Types/category.types';

const { SELECT_CATEGORY, GET_CATEGORIES } = categoryTypes;

export const selectCategory = (id) => ({
	type: SELECT_CATEGORY,
	categoryId: id,
});

export const getCategories = () => {
	return async (dispatch) => {
		try {
			const reponse = await fetch(`${URL_API}categories.json`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const data = await reponse.json();
			const categories = Object.keys(data).map((key) => {
				return {
					...data[key],
					id: key,
				};
			});

			dispatch({
				type: GET_ORDERS,
				payload: categories,
			});
		} catch (error) {
			console.log(error.message);
		}
	};
};
