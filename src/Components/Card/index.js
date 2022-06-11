import { Image, Text, View } from 'react-native';

import Counter from '../Counter';
import React from 'react';
import StyledText from '../StyledText/index';
import { styles } from './styles';

const Card = ({ product, order, setOrder }) => {
	const { name, description, variety, img, price } = product;

	const imageSrc = img
		? require('../../../assets/imagenEjemplo.png')
		: require('../../../assets/imagenEjemplo.png');

	return (
		<View style={styles.container}>
			<Image style={{ width: 200, height: 200 }} source={imageSrc} />
			<StyledText font='interBold' style={styles.name}>
				{name}
			</StyledText>
			<StyledText font='inter'>{description}</StyledText>
			<StyledText font='inter'>{variety}</StyledText>
			<StyledText font='inter'>{price}</StyledText>
			<Counter order={order} setOrder={setOrder} product={product} />
		</View>
	);
};

export default Card;
