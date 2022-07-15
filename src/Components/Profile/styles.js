import { StyleSheet } from 'react-native';
import theme from '../../../Constants/theme';
import { useTheme } from '@react-navigation/native';

export const styles = StyleSheet.create({
	container: { display: 'flex', flexDirection: 'row', marginHorizontal: 15 },
	preview: {
		width: 100,
		height: 100,
		backgroundColor: theme.colors.primary,
		borderRadius: 100,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		alignSelf: 'flex-end',
		padding: 5,
		backgroundColor: theme.colors.white,
		borderRadius: 25,
		position: 'absolute',
		top: 65,
	},
	picture: { width: 100, height: 100, borderRadius: 100 },
	information: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	userName: { fontSize: 25, marginBottom: 10 },
	userMail: { fontSize: 12 },
});
