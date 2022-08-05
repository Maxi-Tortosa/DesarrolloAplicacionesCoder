import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import theme from '../../../Constants/theme';
import { useIsSmallDevice } from '../../Utils/hooks';

const { width, height } = Dimensions.get('window');
const isSmallDevice = useIsSmallDevice();

export const styles = StyleSheet.create({
	scrollContainer: { flex: 1, backgroundColor: theme.colors.primary },
	container: {
		flex: 1,
		backgroundColor: theme.colors.primary,
		display: 'flex',
		alignItems: 'center',
		buttonRegister: 'center',
	},
	burgerImage: {
		width: !isSmallDevice ? 200 : 140,
		height: !isSmallDevice ? 200 : 140,
		marginTop: !isSmallDevice ? theme.margin.t : theme.margin.o,
	},
	welcomeText: {
		width: !isSmallDevice ? null : width / 1.2,
		fontSize: !isSmallDevice
			? theme.fontSize.titleL + 14
			: theme.fontSize.titleL + 2,
		marginBottom: theme.margin.t,
		textAlign: 'center',
	},
	questionText: { marginTop: theme.margin.t - 5 },
	buttonIngresar: { marginTop: theme.margin.t - 5 },
	buttonRegister: { marginTop: theme.margin.t },
});
