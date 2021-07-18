import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import TestFactories from './helpers/testFactories';

const addFavoriteButtonContainer = () => {
	document.body.innerHTML = '<div class="btn-favorite-container"></div>';
};

describe('Delete a restaurant from Favorite', () => {

	beforeEach(async () => {
		addFavoriteButtonContainer();
		await FavoriteRestaurantIdb.putRestaurant({ id: 1, name: 'Test' });
	});
	
	afterEach(async () => {
		await FavoriteRestaurantIdb.deleteRestaurant(1);
	});

	it('should not show the favorite button when the restaurant has been favorited before', async () => {
		await TestFactories.createFavoriteButtonPresenterWithRestaurant({id: 1, name: 'Test'});

		expect(document.querySelector('[aria-label="simpan ke favorit"]'))
			.toBeFalsy();
	});

	it('should show the unfavorite button when the restaurant has been favorited before', async () => {
		await TestFactories.createFavoriteButtonPresenterWithRestaurant({id: 1, name: 'Test'});

		expect(document.querySelector('[aria-label="hapus dari favorit"]'))
			.toBeTruthy();
	});

	it('should be able delete a restaurant from favorite', async () => {
		await TestFactories.createFavoriteButtonPresenterWithRestaurant({id: 1, name: 'Test'});

		spyOn(window, 'alert');
		document.querySelector('#btn-favorite').dispatchEvent(new Event('click'));

		expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
		expect(window.alert).toHaveBeenCalledWith('Berhasil Menghapus Restoran Test dari Favorit.');
	});
	
	it('should not add a restaurant again when its already favorited', async () => {
		await TestFactories.createFavoriteButtonPresenterWithRestaurant({id: 1, name: 'Test'});
		
		// hapus dulu resto dari daftar resto yang disukai
		await FavoriteRestaurantIdb.deleteRestaurant(1);
 
		// kemudian, simulasikan pengguna menekan widget batal menyukai resto
		document.querySelector('[aria-label="hapus dari favorit"]').dispatchEvent(new Event('click'));
	   
		expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
	});
});


