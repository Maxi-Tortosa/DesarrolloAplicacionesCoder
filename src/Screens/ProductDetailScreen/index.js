import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { Counter } from '../../Components';
import { styles } from './styles';
import { useSelector } from 'react-redux';

const ProductDetailScreen = ({}) => {
	const product = useSelector((state) => state.products.selected);

	const [amount, setAmount] = useState(0);

	return (
		<View style={styles.container}>
			<View style={styles.details}>
				<Text style={styles.text}>id: {product.id}</Text>
				<Text style={styles.text}>{product.name}</Text>
				<Text style={styles.text}>{product.description}</Text>
				<Text style={styles.text}>{product.weight}</Text>
				<Text style={styles.text}>${product.price.toFixed(2)}</Text>
				<Counter amount={amount} setAmount={setAmount} />
			</View>
		</View>
	);
};

export default ProductDetailScreen;
