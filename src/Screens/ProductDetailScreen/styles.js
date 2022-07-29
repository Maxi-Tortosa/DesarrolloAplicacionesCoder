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
		marginBottom: 30,
	},
	image: {
		width: 200,
		height: 200,
		borderRadius: 200,
		alignSelf: 'center',
		marginBottom: 30,
	},
	text: {
		fontSize: 18,
		marginBottom: 10,
	},
	counterText: { fontSize: 18 },
	addButton: {
		width: width / 1.2,
		paddingVertical: 12,
		fontSize: 18,
		marginTop: 20,
	},
});
