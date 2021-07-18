import { createRestaurantItemTemplate } from '../../templates/template-builder';

class FavoriteRestaurantShowPresenter {
	constructor({ container, favoriteRestaurants }) {
		this._view = container;
		this._favoriteRestaurants = favoriteRestaurants;
  
		this._showFavoriteRestaurants();
	}
  
	async _showFavoriteRestaurants() {
		const restaurants = await this._favoriteRestaurants.getAllRestaurants();
		this._displayRestaurants(restaurants);
	}
  
	_displayRestaurants(restaurants = []) {; 
    	let inner = '';
		if (restaurants.length){
			restaurants.forEach((restaurant) => {
				inner += createRestaurantItemTemplate(restaurant);
			});
		} else {
			inner = `<div class="no-data">Tidak ada Restoran untuk ditampilkan.</div>`;
		}
		this._view.innerHTML = inner;
		this._view.dispatchEvent(new Event('restaurants:updated'));
	}
}
  
export default FavoriteRestaurantShowPresenter;