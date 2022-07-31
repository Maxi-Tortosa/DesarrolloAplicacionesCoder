import { Counter, StyledText } from '../../Components';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItem } from './../../Store/Actions/cart.actions';
import { styles } from './styles';

const ProductDetailScreen = ({ route, navigation }) => {
	const dispatch = useDispatch();
	const product = useSelector((state) => state.products.selected);
	const cart = useSelector((state) => state.cart.items);
	const [amount, setAmount] = useState(0);

	const { category } = route.params;
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
						<StyledText font='interBold' style={styles.nameText}>
							{name}
						</StyledText>
						<Image style={styles.image} source={src} />
						<StyledText font='interBold' style={styles.priceText}>
							$ {price.toFixed(2)}
						</StyledText>
						<StyledText font='interBold' style={styles.mainCharacteristics}>
							Características principales
						</StyledText>
						<View style={styles.item}>
							<StyledText font='interBold' style={styles.itemTitle}>
								Categoría
							</StyledText>
							<StyledText
								font='inter'
								style={styles.itemTitle}
								lines={1}
								ellipsis='tail'>
								{category}
							</StyledText>
						</View>
						<View style={styles.item}>
							<StyledText font='interBold' style={styles.itemTitle}>
								Variedad
							</StyledText>
							<StyledText
								font='inter'
								style={styles.itemTitle}
								lines={1}
								ellipsis='tail'>
								{variety}
							</StyledText>
						</View>
						<StyledText font='interBold' style={styles.descriptionTitle}>
							Descripción
						</StyledText>
						<StyledText font='inter' style={styles.text}>
							{description}
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
