import { collection, onSnapshot } from 'firebase/firestore';

import { db } from '../../Firebase/index';
import { productsTypes } from './../Types/products.types';

const { SELECT_PRODUCT, FILTERED_PRODUCTS, GET_PRODUCTS } = productsTypes;

export const selectProduct = (id) => ({
	type: SELECT_PRODUCT,
	productId: id,
});

export const filteredProducts = (name) => ({
	type: FILTERED_PRODUCTS,
	categoryName: name,
});

export const getProducts = () => {
	return async (dispatch) => {
		onSnapshot(
			collection(db, 'Productos'),
			(snapshot) =>
				dispatch({
					type: GET_PRODUCTS,
					payload: snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
				}),
			(error) => console.log(error)
		);
	};
};
