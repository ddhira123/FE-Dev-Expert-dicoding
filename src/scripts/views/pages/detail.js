import DataSource from "../../globals/data-source";
import UrlParser from "../../routes/url-parser";
import { createRestaurantDetailTemplate } from "../templates/template-builder";

const Detail = {
	async render() {
		return `<div class="container card restaurant-detail" id="detail"></div>`;
	},

	async afterRender() {
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const restaurant = await DataSource.detailRestaurant(url.id);
		const restaurantContainer = document.querySelector('#detail');
		restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
	},
};

export default Detail;
