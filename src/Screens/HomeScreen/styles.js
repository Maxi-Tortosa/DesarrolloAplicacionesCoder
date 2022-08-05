import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import theme from '../../../Constants/theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: theme.colors.white,
	},
	title: {
		fontSize: theme.fontSize.titleM,
		textAlign: 'center',
		width: width / 1.2,
		marginTop: theme.margin.t,
		marginBottom: theme.margin.o,
	},
	listHeader: {
		fontSize: theme.fontSize.titleL - 4,
		marginVertical: theme.margin.t,
		marginHorizontal: width / 12,
		textAlign: 'center',
	},
	categoryList: { flex: 1, width: width },

	noproductsText: {
		width: '90%',
		fontSize: theme.fontSize.titleS,
		lineHeight: 20,
		marginLeft: theme.margin.th,
		marginVertical: theme.margin.t,
	},
});
