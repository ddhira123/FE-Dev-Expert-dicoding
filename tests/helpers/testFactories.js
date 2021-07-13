import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-button-initiator';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';

const TestFactories = {
	createFavoriteButtonPresenterWithRestaurant : async (restaurant) => {
		await FavoriteButtonInitiator.init({
			favoriteButtonContainer: document.querySelector('.btn-favorite-container'),
			favoriteRestaurants: FavoriteRestaurantIdb,
			restaurant,
		});
	},
}

 
export default TestFactories;