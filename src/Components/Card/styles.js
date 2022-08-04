import { Dimensions, StyleSheet } from 'react-native';

import theme from '../../../Constants/theme';
import { useIsPortrait } from './../../Utils/hooks';

const { width, height } = Dimensions.get('window');
const isPortrait = useIsPortrait();
export const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: width * 0.4,
		margin: 20,
		height: isPortrait ? height * 0.35 : height * 0.55,
	},
	containerTouchable: {
		flex: 1,
		backgroundColor: theme.colors.white,
		borderRadius: theme.borderRadius.productCard,
		borderColor: theme.colors.primary,
		borderWidth: 1,
		borderBottomColor: theme.colors.primary,
		borderBottomWidth: 20,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 5,
	},
	img: { width: 100, height: 100, borderRadius: 100, marginVertical: 15 },
	name: {
		fontSize: 13,
		paddingHorizontal: 10,
		marginBottom: 10,
		textTransform: 'uppercase',
	},
});
