import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyCyNwnH4GDtKLPbWZXn-RXq6c_LrdqWvEg',
	authDomain: 'luma-veggie-app.firebaseapp.com',
	databaseURL: 'https://luma-veggie-app-default-rtdb.firebaseio.com',
	projectId: 'luma-veggie-app',
	storageBucket: 'luma-veggie-app.appspot.com',
	messagingSenderId: '244426881853',
	appId: '1:244426881853:web:340ee8c0f9e0da2d186354',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
