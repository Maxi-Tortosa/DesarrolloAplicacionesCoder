import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		// justifyContent: 'center',
	},

	searcherInput: {
		width: '85%',
		fontSize: 15,
		marginTop: 30,
		marginBottom: 30,
		borderWidth: 1,
		elevation: 5,
	},

	verticalScroll: {},
	categoryText: { fontSize: 18, lineHeight: 20, marginLeft: 30, marginTop: 15 },

	noproductsText: {
		width: '90%',
		fontSize: 16,
		lineHeight: 20,
		marginLeft: 30,
		marginVertical: 20,
	},
});
