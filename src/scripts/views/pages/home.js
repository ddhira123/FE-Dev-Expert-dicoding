import * as data from "../../../DATA.json";

let inner = '<div class="row">';

data.restaurants.forEach((item) => {
	inner += `<div class="col">
                <div class="card">
                    <div class="card-image">
                        <div class="card-badge">
                            <i class="material-icons">place</i>
                            <span class="loc">${item.city}</span>
                        </div>
                        <img src="${item.pictureId}" alt="This is the image of restaurant ${item.name} in ${item.city}">
                    </div>
                    <div class="card-content">
                        <span class="card-title">${item.name}</span>
                        <div 
                            class="Stars" 
                            style="--rating: ${item.rating};" 
                            role="img" 
                            aria-label="Rating of this restaurant is ${item.rating} out of 5." 
                            alt="Rating of this restaurant is ${item.rating} out of 5.">
                        </div>
                        <span style="display:inline-block;margin-bottom:8px;">(Rating: ${item.rating}/5)</span>
                        <p class="ellipsis">${item.description}</p>
                    </div>
                </div>
            </div>`;
});
inner += "</div>";
document.querySelector("div.list").innerHTML = inner;

const Home = {
	async render() {
		return `
        <h2>Now Playing Page</h2>
      `;
	},

	async afterRender() {},
};

export default Home;
