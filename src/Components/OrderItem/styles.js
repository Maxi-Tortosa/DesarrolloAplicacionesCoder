import { StyleSheet } from 'react-native';
import theme from '../../../Constants/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		borderBottomColor: theme.colors.primary,
		borderBottomWidth: 1,
	},
	headerContainer: {},
	header: {
		fontSize: 16,
	},
	containerDetail: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	detail: {},
	detailTotal: {
		fontSize: 14,
	},
});
