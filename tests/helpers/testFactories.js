import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-button-initiator';
 
const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
	await FavoriteButtonInitiator.init({
		favoriteButtonContainer: document.querySelector('.btn-favorite-container'),
		restaurant,
	});
};
 
export default createFavoriteButtonPresenterWithRestaurant;