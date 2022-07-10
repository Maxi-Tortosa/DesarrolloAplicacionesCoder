import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Counter } from '../../Components';
import { addItem } from './../../Store/Actions/cart.actions';
import { styles } from './styles';

const ProductDetailScreen = () => {
	const dispatch = useDispatch();
	const product = useSelector((state) => state.products.selected);
	const [amount, setAmount] = useState(0);

	const onHandlerAddToCart = () => {
		dispatch(addItem(product, amount));
	};

	return (
		<View style={styles.container}>
			<View style={styles.details}>
				<Text style={styles.text}>id: {product.id}</Text>
				<Text style={styles.text}>{product.name}</Text>
				<Text style={styles.text}>{product.description}</Text>
				<Text style={styles.text}>{product.weight}</Text>
				<Text style={styles.text}>${product.price.toFixed(2)}</Text>
				<Counter
					amount={amount}
					setAmount={setAmount}
					onAdd={onHandlerAddToCart}
				/>
			</View>
		</View>
	);
};

export default ProductDetailScreen;
