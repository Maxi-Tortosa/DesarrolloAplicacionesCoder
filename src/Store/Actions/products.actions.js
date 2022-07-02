import { productsTypes } from './../Types/products.types';

const { SELECT_PRODUCT, FILTERED_PRODUCTS } = productsTypes;

export const selectProduct = (id) => ({
	type: SELECT_PRODUCT,
	productId: id,
});

export const filteredProducts = (name) => ({
	type: FILTERED_PRODUCTS,
	categoryName: name,
});
