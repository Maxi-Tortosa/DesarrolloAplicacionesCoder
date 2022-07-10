import { StyleSheet } from 'react-native';
import colors from 'webpack-dev-server/lib/utils/colors';
import theme from '../../../Constants/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,

		backgroundColor: 'rgb(0, 0, 0, 0.4)',
	},
	modalContainer: {
		backgroundColor: theme.colors.white,
		flex: 1,
		flexDirection: 'column',
	},
	modal: {},
	closeButton: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	closeButtonText: {
		alignSelf: 'flex-end',
		fontSize: 16,
		marginRight: 30,
	},
	titleText: {
		fontSize: 14,
		width: '50%',
		marginLeft: 30,
		marginTop: 80,
		color: theme.colors.primary,
	},
	titleText2: {
		fontSize: 40,
		width: '50%',
		marginLeft: 30,
		marginBottom: 40,
		color: theme.colors.primary,
	},
	input: {
		backgroundColor: theme.colors.primary,

		marginTop: 10,
		marginLeft: 30,
	},
	submitButton: {
		backgroundColor: theme.colors.primary,
		width: '30%',
		alignSelf: 'center',
		marginTop: 30,
	},
});
