import { FlatList, Text, View } from 'react-native';

import React from 'react';
import { styles } from './styles';

const CartContainer = () => {
	return (
		<View style={styles.container}>
			<Text>Este es el detalle de tu pedido</Text>
			<FlatList></FlatList>
		</View>
	);
};

export default CartContainer;
