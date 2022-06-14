import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		// justifyContent: 'center',
	},

	searcherInput: {
		width: '85%',
		fontSize: 15,
		marginVertical: 30,
		borderWidth: 1,
		elevation: 5,
	},
	order: { width: '80%', flex: 0.4, marginHorizontal: 30 },
	orderTitle: { fontWeight: 'bold', marginBottom: 15, fontSize: 15 },
	item: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 3,
	},
	categoryText: { fontSize: 18, lineHeight: 20, marginLeft: 30 },
	itemText: { flex: 1 },
	orderList: { flex: 1 },
});
