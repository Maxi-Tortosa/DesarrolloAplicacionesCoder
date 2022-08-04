import { Dimensions, StyleSheet } from 'react-native';

import theme from '../../../Constants/theme';
import { useIsPortrait } from '../../Utils/hooks';

const { width, height } = Dimensions.get('window');
const isPortrait = useIsPortrait();
export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
		paddingHorizontal: width / 12,
	},
	ordersButton: { marginTop: isPortrait ? theme.margin.th : theme.margin.t },
	signoutButton: {
		marginVertical: theme.margin.th,
		borderWidth: 2,
		borderColor: theme.colors.primary,
	},
});
