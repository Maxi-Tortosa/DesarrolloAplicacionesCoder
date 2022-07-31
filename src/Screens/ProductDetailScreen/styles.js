import { Dimensions, StyleSheet } from 'react-native';

import theme from '../../../Constants/theme';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
	safeArea: { backgroundColor: 'white', flex: 1 },
	container: {
		flex: 1,
		marginVertical: 40,
		backgroundColor: theme.colors.white,
		alignItems: 'center',
		justifyContent: 'center',
	},
	details: {
		width: width / 1.2,
		marginBottom: theme.margin.t,
	},
	image: {
		width: 200,
		height: 200,
		borderRadius: 200,
		alignSelf: 'center',
		marginBottom: theme.margin.th,
	},
	nameText: {
		fontSize: theme.fontSize.detailTitle,
		marginBottom: theme.margin.th,
	},
	text: {
		fontSize: theme.fontSize.detailText,
		marginBottom: theme.margin.o,
	},
	priceText: {
		fontSize: theme.fontSize.detailPrice,
		marginBottom: theme.margin.t,
	},
	counterText: { fontSize: theme.fontSize.counterText },
	descriptionTitle: {
		fontSize: theme.fontSize.detailText,
		marginBottom: theme.margin.o,
		marginTop: theme.margin.t,
	},
	mainCharacteristics: {
		fontSize: theme.fontSize.detailText,
		marginBottom: theme.margin.o,
	},
	item: {
		width: width / 1.2,
		backgroundColor: theme.colors.lightGrey,
		marginBottom: theme.margin.o,
		padding: theme.padding.o,
		display: 'flex',
		flexDirection: 'row',
	},
	itemTitle: {
		fontSize: theme.fontSize.detailItemText,
		width: '50%',
	},
	itemText: { fontSize: theme.fontSize.detailItemText, width: '50%' },

	addButton: {
		width: width / 1.2,
		paddingVertical: 12,
		fontSize: 18,
		marginTop: 20,
	},
});
