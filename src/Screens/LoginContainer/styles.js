import { StyleSheet } from 'react-native';
import theme from '../../../Constants/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.primary,
		display: 'flex',
		alignItems: 'center',
		buttonRegister: 'center',
	},
	burgerImage: { width: 200, height: 200 },
	welcomeText: { fontSize: 40, marginBottom: 20, textAlign: 'center' },
	questionText: { marginTop: 15 },
	buttonIngresar: { marginTop: 15 },
	buttonRegister: { marginTop: 20 },
});
