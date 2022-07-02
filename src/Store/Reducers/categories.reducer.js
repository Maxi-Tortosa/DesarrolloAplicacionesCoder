import { Categories } from '../../../Mocks/products';
import { categoryTypes } from '../Types/category.types';

const { SELECT_CATEGORY } = categoryTypes;

const initialState = { categories: Categories, selected: null };

const CategoriesReducer = (state = initialState, action) => {
	switch (action.type) {
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
