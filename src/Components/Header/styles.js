import { StyleSheet } from 'react-native';
import theme from '../../../Constants/theme';
import { useIsPortrait } from './../../Utils/hooks';

const isPortrait = useIsPortrait();

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: isPortrait ? 120 : 100,
		backgroundColor: !isPortrait && theme.colors.primary,
	},
	image: { flex: 1 },
});
