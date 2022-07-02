import { categoryTypes } from '../Types/category.types';

const { SELECT_CATEGORY } = categoryTypes;

export const selectCategory = (id) => ({
	type: SELECT_CATEGORY,
	categoryId: id,
});
