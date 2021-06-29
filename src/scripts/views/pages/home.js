import DataSource from "../../globals/data-source";
import { createRestaurantItemTemplate } from "../templates/template-builder";

const Home = {
	async render() {
		let inner = `
            <div class="jumbotron" id="home-banner">
				<div 
					class="container" 
					role="img" 
					aria-label="Selamat datang di RestoList. Temukan Restoran favorit Anda disini.">
					<h1 class="light-text">Selamat datang di Restolist</h1>
					<p>Temukan daftar restoran yang terpercaya!</p>
				</div>
			</div>
			<div class="container" id="list-wrapper">
				<h2 class="text-center">Jelajahi Resto-resto berikut.</h1>
				<div class="list row"></div>`;

		inner += "</div>";
		return inner;
	},

	async afterRender() {
		const restaurants = await DataSource.restaurantList();
		const listElement = document.querySelector(".list");
		let innerList = "";
		restaurants.forEach(restaurant => {
			innerList += createRestaurantItemTemplate(restaurant);
		});
		listElement.innerHTML = innerList;
	},
};

export default Home;
