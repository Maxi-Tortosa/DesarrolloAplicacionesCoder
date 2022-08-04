import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import theme from '../../../Constants/theme';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
	scrollContainer: { flex: 1, backgroundColor: theme.colors.primary },
	container: {
		flex: 1,
		backgroundColor: theme.colors.primary,
		display: 'flex',
		alignItems: 'center',
		buttonRegister: 'center',
	},
	burgerImage: { width: 200, height: 200, marginTop: theme.margin.t },
	welcomeText: {
		fontSize: theme.fontSize.titleL + 14,
		marginBottom: theme.margin.t,
		textAlign: 'center',
	},
	questionText: { marginTop: theme.margin.t - 5 },
	buttonIngresar: { marginTop: theme.margin.t - 5 },
	buttonRegister: { marginTop: theme.margin.t },
});
