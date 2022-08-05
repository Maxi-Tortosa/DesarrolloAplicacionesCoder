import { Dimensions, StyleSheet } from 'react-native';

import theme from '../../../Constants/theme';
import { useIsSmallDevice } from '../../Utils/hooks';

const isSmallDevice = useIsSmallDevice();
const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
	container: {
		flex: 1,

		backgroundColor: 'rgb(0, 0, 0, 0.4)',
	},
	modalContainer: {
		backgroundColor: theme.colors.white,
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
	},

	closeButton: {
		marginTop: theme.margin.th,
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	closeButtonText: {
		alignSelf: 'flex-end',
		fontSize: theme.fontSize.titleS,
		marginRight: theme.margin.th,
	},
	titleText: {
		fontSize: theme.fontSize.titleS - 2,
		width: '50%',
		marginLeft: width / 12,
		marginTop: !isSmallDevice ? theme.margin.f * 2 : theme.margin.t,
		color: theme.colors.primary,
		alignSelf: 'flex-start',
	},
	titleText2: {
		fontSize: !isSmallDevice
			? theme.fontSize.titleXL + 14
			: theme.fontSize.titleXL + 10,
		width: width / 2,
		marginLeft: width / 12,
		marginBottom: theme.margin.t,
		color: theme.colors.primary,
		alignSelf: 'flex-start',
	},
	input: {
		backgroundColor: theme.colors.primary,
		marginTop: theme.margin.o,
	},
	submitButton: {
		backgroundColor: theme.colors.primary,
		width: 150,
		alignSelf: 'center',
		marginTop: theme.margin.th,
	},
});
