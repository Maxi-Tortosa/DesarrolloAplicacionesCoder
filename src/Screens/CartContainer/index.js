import { FlatList, View } from 'react-native';

import React from 'react';
import { StyledText } from '../../Components';
import { styles } from './styles';

const CartContainer = () => {
	return (
		<View style={styles.container}>
			<StyledText font='inter'>Este es el detalle de tu pedido</StyledText>
			<FlatList></FlatList>
		</View>
	);
};

export default CartContainer;
