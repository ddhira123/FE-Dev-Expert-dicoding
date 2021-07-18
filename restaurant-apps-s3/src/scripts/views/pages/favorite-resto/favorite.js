import FavoriteRestaurantIdb from '../../../data/favorite-restaurant-idb';
import FavoriteRestaurantShowPresenter from './favorite-presenter';
 
const Favorite = {
	async render() {
		return `
            <div class="container">
                <h2 class="text-center">Restoran Favorit</h2>
                <div id="restaurants" class="restaurants">
        
                </div>
            </div>
        `;
	},
 
	async afterRender() {
		new FavoriteRestaurantShowPresenter({
			container: document.querySelector('#restaurants'),
			favoriteRestaurants: FavoriteRestaurantIdb
		})
	},
};
 
export default Favorite;