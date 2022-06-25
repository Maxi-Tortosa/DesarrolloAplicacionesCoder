import { Dimensions, StyleSheet } from 'react-native';

import theme from '../../../Constants/theme';

const { width, height } = Dimensions.get('window');

// https://ethercreative.github.io/react-native-shadow-generator/

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: width * 0.4,
		margin: 20,
		height: height * 0.32,
	},
	containerTouchable: {
		flex: 1,
		backgroundColor: theme.colors.white,
		borderRadius: theme.borderRadius.productCard,
		borderBottomColor: theme.colors.primary,
		borderBottomWidth: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	img: { width: 150, height: 100 },
	name: {
		fontSize: 15,
		paddingHorizontal: 10,
		marginBottom: 10,
		textTransform: 'uppercase',
	},
});
