import { Image, TouchableOpacity, View } from 'react-native';

import Counter from '../Counter';
import React from 'react';
import StyledText from '../StyledText/index';
import { styles } from './styles';

const Card = ({ product, order, setOrder, onPress }) => {
	const { name, img } = product;
	const src = { uri: img };
	const handlePress = (item) => {
		onPress(item);
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.containerTouchable}
				onPress={() => handlePress(product)}>
				<Image style={styles.img} source={src} />
				<StyledText font='interBold' style={styles.name}>
					{name}
				</StyledText>
			</TouchableOpacity>
		</View>
	);
};

export default Card;
