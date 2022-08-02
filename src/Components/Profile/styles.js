import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import theme from '../../../Constants/theme';
import { useTheme } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
	container: {
		flex: 0.45,
		display: 'flex',
		flexDirection: 'column',
		marginHorizontal: theme.margin.o + 5,
		marginTop: theme.margin.o + 5,
		alignItems: 'center',
	},
	preview: {
		width: 120,
		height: 120,
		backgroundColor: theme.colors.primary,
		borderRadius: 120,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		alignSelf: 'flex-end',
		padding: theme.padding.o - 5,
		backgroundColor: theme.colors.lightGrey,
		borderRadius: 25,
		position: 'absolute',
		top: 80,
	},
	picture: { width: 120, height: 120, borderRadius: 120 },
	information: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},

	userMail: {
		fontSize: theme.fontSize.titleM,
		marginVertical: theme.margin.o + 5,
	},
});
