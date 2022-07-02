import { Image, Text, TouchableOpacity, View } from 'react-native';

import Counter from '../Counter';
import React from 'react';
import StyledText from '../StyledText/index';
import { styles } from './styles';

const Card = ({ product, order, setOrder, onPress }) => {
	const { name, description, variety, img, price } = product;

	const imageSrc = img
		? require('../../../assets/imagenEjemplo.png')
		: require('../../../assets/imagenEjemplo.png');

	const handlePress = (item) => {
		onPress(item);
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.containerTouchable}
				onPress={() => handlePress(product)}>
				<Image style={styles.img} source={imageSrc} />
				<StyledText font='interBold' style={styles.name}>
					{name}
				</StyledText>
			</TouchableOpacity>
			{/* <StyledText font='inter'>{description}</StyledText>
			<StyledText font='inter'>{variety}</StyledText>
			<StyledText font='inter'>{price}</StyledText> */}
			{/* <Counter order={order} setOrder={setOrder} product={product} /> */}
		</View>
	);
};

export default Card;
