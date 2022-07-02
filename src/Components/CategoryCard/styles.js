import { Dimensions, StyleSheet } from 'react-native';

import theme from '../../../Constants/theme';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
	container: {
		width: width * 0.85,
		height: height * 0.25,
		marginHorizontal: (width * 0.15) / 2,
		marginVertical: 20,
		borderRadius: 20,
	},
	containerTouchable: {
		flex: 1,
		borderRadius: theme.borderRadius.categoryCard,
		overflow: 'hidden',
		borderWidth: 1,
		borderColor: theme.colors.primary,
	},
	imageBackground: {
		flex: 1,
		resizeMode: 'contain',
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageText: { color: theme.colors.primary, fontSize: 25 },
});
