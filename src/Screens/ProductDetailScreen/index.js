import { Counter, StyledText } from '../../Components';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItem } from './../../Store/Actions/cart.actions';
import { styles } from './styles';

const ProductDetailScreen = () => {
	const dispatch = useDispatch();
	const product = useSelector((state) => state.products.selected);
	const cart = useSelector((state) => state.cart.items);
	const [amount, setAmount] = useState(0);

	const { name, description, variety, price, img } = product;

	const src = { uri: img };

	const onHandlerAddToCart = () => {
		const repeat = cart.find((elem) => elem.code === product.id);

		dispatch(addItem(product, amount, repeat));
	};

	return (
		<SafeAreaView style={styles.safeArea}>
			<ScrollView>
				<View style={styles.container}>
					<View style={styles.details}>
						<Image style={styles.image} source={src} />
						<StyledText font='inter' style={styles.text}>
							<StyledText font='interBold'>Nombre: </StyledText>
							{name}
						</StyledText>
						<StyledText font='inter' style={styles.text}>
							<StyledText font='interBold'>Descripción: </StyledText>
							{description}
						</StyledText>
						<StyledText font='inter' style={styles.text}>
							<StyledText font='interBold'>Variedad: </StyledText>
							{variety}
						</StyledText>
						<StyledText font='inter' style={styles.text}>
							<StyledText font='interBold'>Precio: </StyledText>$
							{price.toFixed(2)}
						</StyledText>
					</View>
					<Counter
						amount={amount}
						setAmount={setAmount}
						onAdd={onHandlerAddToCart}
						textStyle={styles.counterText}
						addButtonStyle={styles.addButton}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default ProductDetailScreen;
