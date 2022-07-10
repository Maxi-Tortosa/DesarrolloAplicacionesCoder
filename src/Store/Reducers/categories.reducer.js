import { categoryTypes } from '../Types/category.types';

const { GET_CATEGORIES, SELECT_CATEGORY } = categoryTypes;

const initialState = { categories: [], selected: null };

const CategoriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CATEGORIES:
			return {
				...state,
				categories: action.payload,
			};
		case SELECT_CATEGORY:
			const indexCategory = state.categories.findIndex(
				(category) => category.id === action.categoryId
			);
			if (indexCategory === -1) return state;
			return { ...state, selected: state.categories[indexCategory] };

		default:
			return state;
	}
};

export default CategoriesReducer;
