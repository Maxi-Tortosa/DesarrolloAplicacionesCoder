import { Image, Text, View } from 'react-native';

import Counter from '../Counter';
import React from 'react';
import StyledButton from './../StyledButton/index';
import { styles } from './styles';

const Card = ({ product, order, setOrder }) => {
	const { name, description, variety, img, price } = product;

	const imageSrc = img
		? require('../../../assets/imagenEjemplo.png')
		: require('../../../assets/imagenEjemplo.png');

	return (
		<View style={styles.container}>
			<Image style={{ width: 200, height: 200 }} source={imageSrc} />
			<Text style={styles.name}>{name}</Text>
			<Text>{description}</Text>
			<Text>{variety}</Text>
			<Text>{price}</Text>
			<Counter order={order} setOrder={setOrder} product={product} />
		</View>
	);
};

export default Card;
