import { StyleSheet } from 'react-native';
import theme from '../../../Constants/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.primary,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	burgerImage: { width: 200, height: 200 },
	welcomeText: { fontSize: 25, marginBottom: 40 },
	questionText: { marginBottom: 10 },
});
