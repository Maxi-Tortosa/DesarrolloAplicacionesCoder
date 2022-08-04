import { Dimensions } from 'react-native';

export const useIsPortrait = () => {
	const dim = Dimensions.get('screen');
	return dim.height;
};
