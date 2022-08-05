import { Dimensions } from 'react-native';

const dim = Dimensions.get('screen');

export const useIsPortrait = () => {
	return dim.height >= dim.width;
};

export const useIsSmallDevice = () => {
	return dim.height <= 690 && dim.width <= 360;
};
