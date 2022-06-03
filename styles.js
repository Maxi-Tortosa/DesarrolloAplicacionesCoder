import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	content: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 100,
		marginHorizontal: 20,
	},

	input: {
		borderBottomWidth: 1,
		borderBottomColor: '#6B4E71',
		fontSize: 20,
		flex: 0.6,
	},

	containerList: { marginTop: 25 },

	itemList: { fontSize: 15, flex: 0.9 },

	containerItemList: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		marginHorizontal: 10,
		marginTop: 10,
	},
	deleteButton: { backgroundColor: 'red', padding: 10 },
	deleteButtonText: { color: 'white', fontSize: 14, fontWeight: 'bold' },
	modalContent: { flex: 1, backgroundColor: '#fff', alignItems: 'center' },
	modalTittleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	modalTittle: { fontSize: 18, fontWeight: 'bold', marginVertical: 15 },
	modalConfirmation: {
		marginBottom: 12,
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalConfirmationItem: {
		marginBottom: 12,
		fontSize: 15,
		textAlign: 'center',
	},
});
