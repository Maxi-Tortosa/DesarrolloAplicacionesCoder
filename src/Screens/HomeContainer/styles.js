import { StyleSheet } from 'react-native';
import theme from '../../../Constants/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: theme.colors.white,
	},

	categoryList: { flex: 1 },
	categoryText: { fontSize: 18, lineHeight: 20, marginLeft: 30, marginTop: 15 },

	noproductsText: {
		width: '90%',
		fontSize: 16,
		lineHeight: 20,
		marginLeft: 30,
		marginVertical: 20,
	},
});
