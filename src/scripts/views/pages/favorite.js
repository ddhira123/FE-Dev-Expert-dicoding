import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-builder';
 
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
		const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
		const restaurantsContainer = document.querySelector('#restaurants');
		restaurants.forEach((restaurant) => {
			restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
		});
	},
};
 
export default Favorite;