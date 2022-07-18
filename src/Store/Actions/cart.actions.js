import { addDoc, collection } from 'firebase/firestore';

import { cartTypes } from '../Types/cart.types';
import { db } from '../../Firebase/index';
import { insertProduct } from '../../db';

const { ADD_ITEM, REMOVE_ITEM, CONFIRM_CART } = cartTypes;

export const addItem = (item, quantity) => {
	return async (dispatch) => {
		await insertProduct(
			item.name,
			item.category,
			item.description,
			item.img,
			item.price,
			quantity,
			item.variety
		);
		dispatch({
			type: ADD_ITEM,
			item,
			quantity,
		});
	};
};

export const removeItem = (id) => ({
	type: REMOVE_ITEM,
	id,
});

export const confirmCart = (items, total) => {
	return async (dispatch) => {
		const ref = collection(db, 'Pedidos');

		addDoc(ref, { date: Date.now(), items: items, total: total });

		dispatch({ type: CONFIRM_CART, confirm: true });
	};
};
