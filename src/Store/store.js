import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import pictureReducer from './profilePictures.slice';

export const store = configureStore({
	reducer: { picture: pictureReducer },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
});
