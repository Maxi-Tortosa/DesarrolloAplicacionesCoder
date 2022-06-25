import { Dimensions, StyleSheet } from 'react-native';

import theme from '../../../Constants/theme';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
	container: {
		width: width * 0.85,
		height: height * 0.25,
		margin: 20,
		borderRadius: 20,
	},
	containerTouchable: {
		flex: 1,
		borderRadius: theme.borderRadius.categoryCard,
		overflow: 'hidden',
	},
	imageBackground: {
		flex: 1,
		resizeMode: 'contain',
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageText: { color: theme.colors.primary, fontSize: 25 },
});
