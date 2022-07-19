import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('cart.db');

export const init = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'CREATE TABLE IF NOT EXISTS cart (id INTEGER PRIMARY KEY NOT NULL, code TEXT NO NULL, name TEXT NO NULL, category TEXT NO NULL, description TEXT NO NULL, img TEXT NO NULL, price TEXT NO NULL, quantity TEXT NO NULL, variety TEXT NO NULL)',
				[],
				() => resolve(),
				(_, err) => reject(err)
			);
		});
	});

	return promise;
};

export const deleteTable = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'DELETE FROM cart',
				[],
				() => resolve(),
				(_, err) => reject(err)
			);
		});
	});

	return promise;
};

export const updateProduct = (quantity, code) => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'UPDATE cart SET quantity = ? WHERE code = ?',
				[JSON.stringify(quantity), code],
				(_, result) => {
					console.log(result);
					resolve(result);
				},
				(_, err) => {
					console.log(err);
					reject(err);
				}
			);
		});
	});

	return promise;
};

export const deleteProduct = (code) => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'DELETE FROM cart WHERE code = ? ',
				[code],
				(_, result) => {
					console.log(result);
					resolve(result);
				},
				(_, err) => {
					console.log(err);
					reject(err);
				}
			);
		});
	});

	return promise;
};

export const insertProduct = (
	code,
	name,
	category,
	description,
	img,
	price,
	quantity,
	variety
) => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'INSERT INTO cart (code, name, category, description, img, price, quantity, variety) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
				[
					code,
					name,
					category,
					description,
					img,
					JSON.stringify(price),
					JSON.stringify(quantity),
					variety,
				],
				(_, result) => {
					console.log(result);
					resolve(result);
				},
				(_, err) => {
					console.log(err);
					reject(err);
				}
			);
		});
	});

	return promise;
};

export const fetchProducts = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'SELECT * FROM cart',
				[],
				(_, result) => {
					resolve(result);
				},
				(_, err) => {
					reject(err);
				}
			);
		});
	});
	return promise;
};
