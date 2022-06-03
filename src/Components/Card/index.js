import { Image, Text, View } from 'react-native';

import React from 'react';
import { styles } from './styles';

const Card = ({ product }) => {
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
		</View>
	);
};

export default Card;
