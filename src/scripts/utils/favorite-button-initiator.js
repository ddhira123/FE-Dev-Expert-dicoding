import { 
	createFailedSaveAlert, 
	createFavoriteButtonTemplate, 
	createDeleteFromFavoriteButtonTemplate, 
	createSuccessSaveAlert,
	createFailedDeleteAlert,
	createSuccessDeleteAlert
} from '../views/templates/template-builder';
 
const FavoriteButtonInitiator = {
	async init({ 
		favoriteButtonContainer, 
		favoriteRestaurants, 
		restaurant 
	}) {
		this._favoriteButtonContainer = favoriteButtonContainer;
		this._restaurant = restaurant;
		this._favoriteRestaurants = favoriteRestaurants;
 
		await this._renderButton();
	},
 
	async _renderButton() {
		const { id } = this._restaurant;
 
		if (await this._isRestaurantExist(id)) {
			this._renderFavorited();
		} else {
			this._renderFavorite();
		}
	},
 
	async _isRestaurantExist(id) {
		const restaurant = await this._favoriteRestaurants.getRestaurant(id);
		return !!restaurant;
	},
 
	_renderFavorite() {
		this._favoriteButtonContainer.innerHTML = createFavoriteButtonTemplate();

		const favoriteButton = document.querySelector('#btn-favorite');
		favoriteButton.addEventListener('click', async () => {
			try {
				await this._favoriteRestaurants.putRestaurant(this._restaurant);
				createSuccessSaveAlert(this._restaurant.name);
			} catch (error) {
				createFailedSaveAlert(this._restaurant.name);
			}
			this._renderButton();
		});
	},
 
	_renderFavorited() {
		this._favoriteButtonContainer.innerHTML = createDeleteFromFavoriteButtonTemplate();

		const favoriteButton = document.querySelector('#btn-favorite');
		favoriteButton.addEventListener('click', async () => {
			try {
				await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
				createSuccessDeleteAlert(this._restaurant.name);
			} catch (error) {
				createFailedDeleteAlert(this._restaurant.name);
			}
			this._renderButton();
		});
	},
};
 
export default FavoriteButtonInitiator;