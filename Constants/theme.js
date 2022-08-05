import { useIsSmallDevice } from '../src/Utils/hooks';

const isSmallDevice = useIsSmallDevice();
export default {
	colors: {
		primary: '#F3D15F',
		white: '#FFFFFF',
		shadow: '#000000',
		lightGrey: '#F5F5F5',
		grey: '#d3d3d3',
	},
	borderRadius: { categoryCard: 20, productCard: 20 },
	fontSize: {
		detailTitle: !isSmallDevice ? 18 : 16,
		detailText: !isSmallDevice ? 16 : 14,
		detailItemText: !isSmallDevice ? 11 : 10,
		counterText: !isSmallDevice ? 16 : 14,
		detailPrice: !isSmallDevice ? 22 : 20,
		titleXL: !isSmallDevice ? 26 : 24,
		titleL: !isSmallDevice ? 24 : 22,
		titleM: !isSmallDevice ? 18 : 17,
		titleS: !isSmallDevice ? 16 : 15,
	},
	margin: { o: 10, t: 20, th: 30, f: 40 },
	padding: { o: 10, t: 20, th: 30, f: 40 },
};
