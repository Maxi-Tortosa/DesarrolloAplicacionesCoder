import { addDoc, collection } from 'firebase/firestore';
import {
	deleteProduct,
	deleteTable,
	fetchProducts,
	insertProduct,
	updateProduct,
} from '../../db';

import { cartTypes } from '../Types/cart.types';
import { db } from '../../Firebase/index';

const { CONFIRM_CART, GET_ITEMS } = cartTypes;

export const getProducts = () => {
	return async (dispatch) => {
		try {
			const result = await fetchProducts();

			dispatch({ type: GET_ITEMS, items: result.rows._array });
		} catch (error) {
			console.log(error.message);
		}
	};
};

export const addItem = (item, quantity, repeat) => {
	return async () => {
		if (repeat) {
			const parsedQuantity = parseInt(repeat.quantity);
			const newQuantity = parsedQuantity + quantity;
			updateProduct(newQuantity, item.id);
		} else {
			insertProduct(
				item.id,
				item.name,
				item.category,
				item.description,
				item.img,
				item.price,
				quantity,
				item.variety
			);
		}
	};
};

export const removeItem = (id) => {
	return async () => {
		deleteProduct(id);
	};
};

export const confirmCart = (items, total, userId) => {
	return async (dispatch) => {
		const ref = collection(db, 'Pedidos');

		deleteTable();

		addDoc(ref, {
			userId: userId,
			date: Date.now(),
			items: items,
			total: total,
		});

		dispatch({ type: CONFIRM_CART });
	};
};
