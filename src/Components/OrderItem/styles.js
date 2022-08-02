import { StyleSheet } from 'react-native';
import theme from '../../../Constants/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 90,
		backgroundColor: theme.colors.lightGrey,
		paddingHorizontal: theme.padding.o,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 20,
		borderWidth: 1,
		borderColor: theme.colors.primary,
		marginBottom: theme.margin.o,
	},
	details: { width: '90%' },
	date: { fontSize: theme.fontSize.titleS },
	detailPrice: { fontSize: theme.fontSize.titleM },
});
