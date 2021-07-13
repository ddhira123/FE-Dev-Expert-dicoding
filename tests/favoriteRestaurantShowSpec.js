import FavoriteRestaurantShowPresenter from '../src/scripts/views/pages/favorite-resto/favorite-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Showing all favorite restaurants', () => {

	const renderTemplate = () => {
		document.body.innerHTML = `<div id="restaurants" class="restaurants"></div>`;
	};

	beforeEach(() => {
		renderTemplate();
	});

	describe('When no restaurants have been liked', () => {
		it('should ask for the favorite restaurants', () => {
			const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);

			new FavoriteRestaurantShowPresenter({
				container: document.querySelector('#restaurants'),
				favoriteRestaurants,
			});

			expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
		});

		it('should show the information that no restaurants have been liked', (done) => {
			document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
				expect(document.querySelectorAll('.no-data').length)
					.toEqual(1);
				done();
			});

			const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
			favoriteRestaurants.getAllRestaurants.and.returnValues([]);

			new FavoriteRestaurantShowPresenter({
				container: document.querySelector('#restaurants'),
				favoriteRestaurants,
			});
		});
	});

	describe('When favorite restaurants exist', () => {
		it('should show the restaurants', (done) => {
			document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
				expect(document.querySelectorAll('.restaurant-item').length).toEqual(2);
				done();
			});

			const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
			favoriteRestaurants.getAllRestaurants.and.returnValues([
				{
					id: 11, name: 'A', rating: 3, description: 'Sebuah resto A',
				},
				{
					id: 22, name: 'B', rating: 4, description: 'Sebuah resto B',
				},
			]);

			new FavoriteRestaurantShowPresenter({
				container: document.querySelector('#restaurants'),
				favoriteRestaurants,
			});
		});
	});
});