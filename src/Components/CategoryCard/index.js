import { ImageBackground, TouchableOpacity, View } from 'react-native';

import React from 'react';
import StyledText from './../StyledText/index';
import { styles } from './styles';

const CategoryCard = ({ item, onSelected }) => {
	const { name, catImg } = item;

	const image = { uri: catImg };

	const handlePress = () => onSelected(item);

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.containerTouchable} onPress={handlePress}>
				<ImageBackground style={styles.imageBackground} source={image}>
					<StyledText style={styles.imageText} font='interBold'>
						{name}
					</StyledText>
				</ImageBackground>
			</TouchableOpacity>
		</View>
	);
};

export default CategoryCard;
