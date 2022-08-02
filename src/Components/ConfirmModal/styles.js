import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import theme from '../../../Constants/theme';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
	// container: {
	// 	flex: 1,

	// 	backgroundColor: 'rgb(0, 0, 0, 0.4)',
	// },
	modalContainer: {
		backgroundColor: theme.colors.white,
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},

	titleText: {
		width: width / 1.2,
		fontSize: theme.fontSize.titleL,
		color: theme.colors.primary,
		textAlign: 'center',
	},
	infoText: {
		width: width / 1.3,
		fontSize: theme.fontSize.titleM,
		textAlign: 'center',
		marginTop: theme.margin.o,
	},
	cancelButton: {
		borderWidth: 2,
		borderColor: theme.colors.primary,
		marginVertical: theme.margin.t,
	},
	confirmButton: { marginTop: theme.margin.th },
	// titleText2: {
	// 	fontSize: 40,
	// 	width: '50%',
	// 	marginLeft: 32,
	// 	marginBottom: 40,
	// 	color: theme.colors.primary,
	// 	alignSelf: 'flex-start',
	// },
	// input: {
	// 	backgroundColor: theme.colors.primary,
	// 	marginTop: 10,
	// },
	// submitButton: {
	// 	backgroundColor: theme.colors.primary,
	// 	width: '30%',
	// 	alignSelf: 'center',
	// 	marginTop: 30,
	// },
});
