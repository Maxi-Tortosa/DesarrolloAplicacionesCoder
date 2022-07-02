import { StyleSheet } from 'react-native';
import theme from '../../../Constants/theme';

export const styles = StyleSheet.create({
	container: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
	counter: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 2,
		borderRadius: 10,
		borderColor: theme.colors.primary,
		marginBottom: 10,
	},
});
