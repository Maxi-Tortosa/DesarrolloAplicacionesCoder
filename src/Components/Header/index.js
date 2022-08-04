import { ImageBackground, Text, View } from 'react-native';

import React from 'react';
import { styles } from './styles';
import { useIsPortrait } from './../../Utils/hooks';

const Header = () => {
	const isPortrait = useIsPortrait();
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.image}
				source={require('./headerImg.jpg')}
				resizeMode={isPortrait ? 'cover' : 'contain'}
			/>
		</View>
	);
};

export default Header;
