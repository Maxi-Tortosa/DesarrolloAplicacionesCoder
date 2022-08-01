import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import theme from '../../../Constants/theme';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
		paddingHorizontal: width / 12,
	},
	title: { fontSize: theme.fontSize.titleS },
	cartList: {
		flex: 1,
	},
	footer: {
		borderTopColor: theme.colors.primary,
		borderTopWidth: 1,
	},
	buttonConfirm: {
		backgroundColor: theme.colors.primary,
		borderRadius: 5,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	buttonText: {
		fontSize: 14,
	},
	totalContainer: {
		flex: 0.4,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	totalTitle: {
		fontSize: 14,
	},
	total: {
		fontSize: 16,
	},
});
