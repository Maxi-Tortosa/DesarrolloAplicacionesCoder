import Picture from '../models/Picture.js';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	pictures: [{}],
};

const picturesSlice = createSlice({
	name: 'pictures',
	initialState,
	reducers: {
		addPhoto: (state, action) => {
			const newPicture = new Picture(Date.now(), action.payload);
			state.pictures.push(newPicture);
		},
	},
});

export const { addPhoto } = picturesSlice.actions;

export default picturesSlice.reducer;
