import { StyleSheet } from 'react-native';
import theme from '../../../Constants/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: theme.colors.white,
	},
	cartList: {
		flex: 1,
	},
	footer: {
		borderTopColor: theme.colors.primary,
		borderTopWidth: 1,
		paddingVertical: 10,
	},
	buttonConfirm: {
		backgroundColor: theme.colors.primary,
		borderRadius: 5,
		paddingHorizontal: 10,
		paddingVertical: 12,
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
