import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';


describe('Saving a restaurant to Favorite', () => {
  
	const addFavoriteButtonContainer = () => {
		document.body.innerHTML = '<div class="btn-favorite-container"></div>';
	};

	beforeEach(() => {
		addFavoriteButtonContainer();
	});
  
	it('should show the favorite button when the restaurant has not been favorited before', async () => {
		await TestFactories.createFavoriteButtonPresenterWithRestaurant({id: 1});

		expect(document.querySelector('[aria-label="simpan ke favorit"]'))
			.toBeTruthy();
	});

	it('should not show the unfavorite button when the restaurant has not been favorited before', async () => {
		await TestFactories.createFavoriteButtonPresenterWithRestaurant({id: 1});

		expect(document.querySelector('[aria-label="hapus dari favorit"]'))
			.toBeFalsy();
	});

	it('should be able save a restaurant to favorite', async () => {
		await TestFactories.createFavoriteButtonPresenterWithRestaurant({id: 1, name: 'Test'});

		spyOn(window, 'alert');
		document.querySelector('#btn-favorite').dispatchEvent(new Event('click'));
		const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

		expect(restaurant).toEqual({ id: 1, name: 'Test' });
		expect(window.alert).toHaveBeenCalledWith('Berhasil Menyimpan Restoran Test ke Favorit.');
	
		FavoriteRestaurantIdb.deleteRestaurant(1);
	  });
	
	  it('should not add a restaurant again when its already favorited', async () => {
		await TestFactories.createFavoriteButtonPresenterWithRestaurant({id: 1});

		
		// Tambahkan restoran dengan ID 1 ke daftar restoran yang disukai
		await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
		// Simulasikan pengguna menekan tombol simpan ke favorit
		document.querySelector('#btn-favorite').dispatchEvent(new Event('click'));
		// tidak ada restoran yang ganda
		expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
	
		FavoriteRestaurantIdb.deleteRestaurant(1);
	  });

	  // menggunakan metode xit, bukan it
	it('should not add a restaurant when it has no id', async () => {
		await TestFactories.createFavoriteButtonPresenterWithRestaurant({});

		document.querySelector('#btn-favorite').dispatchEvent(new Event('click'));

		expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
	});
});


