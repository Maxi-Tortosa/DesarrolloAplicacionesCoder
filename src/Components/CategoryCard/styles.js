import { Dimensions, StyleSheet } from 'react-native';

import theme from '../../../Constants/theme';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
	container: {
		width: width / 1.2,
		height: height * 0.25,
		marginHorizontal: width / 12,
		marginVertical: theme.margin.o + 5,
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
	imageText: {
		paddingVertical: theme.padding.o - 5,
		paddingHorizontal: theme.padding.o,
		borderRadius: theme.borderRadius.productCard,
		backgroundColor: theme.colors.lightGrey,
		color: theme.colors.primary,
		fontSize: theme.fontSize.titleXL,
	},
});
