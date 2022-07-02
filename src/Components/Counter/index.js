import { Button, Text, View } from 'react-native';
import React, { useState } from 'react';

import StyledButton from '../StyledButton/index';
import StyledText from '../StyledText';
import { styles } from './styles';

const Counter = ({ limit = 99, product, amount, setAmount }) => {
	const handlerPress = (e, text) => {
		(text == '-') & (amount > 0) &&
			setAmount((currentAmount) => currentAmount - 1);
		(text == '+') & (amount < limit) &&
			setAmount((currentAmount) => currentAmount + 1);
	};

	// const addToOrder = (e, text) => {
	// 	const repeat = order.find((elem) => elem.id == product.id);

	// 	if (!repeat) {
	// 		setOrder((currentOrder) => [
	// 			...currentOrder,
	// 			{
	// 				id: product.id,
	// 				name: product.name,
	// 				variety: product.variety,
	// 				amount: amount,
	// 			},
	// 		]);
	// 	}
	// };

	return (
		<View style={styles.container}>
			<View style={styles.counter}>
				<StyledButton text='-' onPressEvent={handlerPress} />
				<StyledText>{amount}</StyledText>
				<StyledButton text='+' onPressEvent={handlerPress} />
			</View>
			<StyledButton
				text='agregar a mi pedido'
				backgroundColor='#F3D15F'
				onPressEvent={() => null}
			/>
		</View>
	);
};

export default Counter;
