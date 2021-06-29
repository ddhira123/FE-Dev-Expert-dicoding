import API_ENDPOINT from "./api-endpoint";

class DataSource {
	static async restaurantList() {
		const response = await fetch(API_ENDPOINT.LIST);
		const responseJson = await response.json();
		return responseJson.restaurants;
	}

	static async detailRestaurant(id) {
		const response = await fetch(API_ENDPOINT.DETAIL(id));
		const responseJson = await response.json();
		return responseJson.restaurant;
	}
}

export default DataSource;