import API_ENDPOINT from "../../globals/api-endpoint";

const createRestaurantItemTemplate = (restaurant) => `
    
    <div class="card restaurant-item hoverable">
        <a href="/#/detail/${restaurant.id}">
            <div class="card-image">
                <div class="card-badge">
                    <i class="fa fa-lg fa-map-marker" aria-hidden="true"></i>
                    <span class="loc">${restaurant.city}</span>
                </div>
                <img 
                    src="${API_ENDPOINT.RESTO_PIC('medium', restaurant.pictureId)}" 
                    alt="Image of restaurant ${restaurant.name} in ${restaurant.city}">
            </div>
            <div class="card-content">
                <span class="card-title">${restaurant.name}</span>
                <div 
                    class="stars" 
                    style="--rating: ${restaurant.rating};" 
                    role="img" 
                    aria-label="Rating restoran ini adalah ${restaurant.rating} out of 5." 
                    alt="${restaurant.rating}/5.">
                </div>
                <span style="display:inline-block;margin-bottom:8px;">
                    ${restaurant.rating}
                </span>
                <p class="ellipsis">${restaurant.description}</p>
            </div>
        </a>
    </div>`;

const reviewsItemTemplate = review => `
    <div class="restaurant-detail__tabs__review-item">
        <p class="restaurant-detail__tabs__review-item__reviewer">
            ${review.name} 
            <span class="restaurant-detail__tabs__review-item__date">
                , pada ${review.date}
            </span>
        </p>
        <p class="restaurant-detail__tabs__review-item__review">
            ${review.review}
        </p>
    </div>
    <hr>
    `;

const cuisineCategoryBadgeTemplate = category => `
    <div class="restaurant-detail__cuisines-badge">${category.name}</div>
    `;

const menuItemsTemplate = menu => `<li>${menu.name}</li>`;

const multiElementListBuilder = ({data, func}) => {
	let result = "";
	data.forEach(item => {
		result += func(item);
	});
	return result;
} 

const createFavoriteButtonTemplate = () => `
    <button aria-label="simpan ke favorit" id="btn-favorite" class="like">
        <i class="fa fa-lg fa-heart-o" aria-hidden="true"></i> Simpan ke Favorit
    </button>
    `;
       
const createFavoritedButtonTemplate = () => `
    <button aria-label="hapus dari favorit" id="btn-favorite" class="liked">
        <i class="fa fa-lg fa-heart" aria-hidden="true"></i> Hapus dari Favorit
    </button>
    `;

const createSuccessSaveAlert = (restaurantName) => 
	alert(`Berhasil Menyimpan Restoran ${restaurantName} ke Favorit.`);

const createFailedSaveAlert = (restaurantName) => 
	alert(`Gagal Menyimpan Restoran ${restaurantName} ke Favorit.`);

const createSuccessDeleteAlert = (restaurantName) => 
	alert(`Berhasil Mennghapus Restoran ${restaurantName} dari Favorit.`);

const createFailedDeleteAlert = (restaurantName) => 
	alert(`Gagal Menghapus Restoran ${restaurantName} dari Favorit.`);

const createRestaurantDetailTemplate = (restaurant) => {
	console.log(restaurant);
	const cuisines = multiElementListBuilder({
		data: restaurant.categories, 
		func: cuisineCategoryBadgeTemplate
	});
	const reviews = multiElementListBuilder({
		data: restaurant.customerReviews, 
		func: reviewsItemTemplate
	});
	const foodsMenuItemsLi = multiElementListBuilder({
		data: restaurant.menus.foods,
		func:menuItemsTemplate
	});
	const beveragesMenuItemsLi = multiElementListBuilder({
		data: restaurant.menus.drinks,
		func:menuItemsTemplate
	});
	const fullAddress = `${restaurant.address}, ${restaurant.city}`;
	return `
        <img 
            class="restaurant-detail__banner" 
            src="${API_ENDPOINT.RESTO_PIC('large', restaurant.pictureId)}">
        <div class="restaurant-detail__wrapper">
            <div class="restaurant-detail__overview">
                <div class="restaurant-detail__overview__left">
                    <h1>${restaurant.name}</h1>
                    <p>${fullAddress}</p>
                </div>
                
                <div class="restaurant-detail__overview__right">
                    <span class="font-weight-400 rating-title">Rating:</span><br>
                    <div 
                        class="stars" 
                        style="--rating: ${restaurant.rating};" 
                        role="img" 
                        aria-label="Rating restoran ini adalah ${restaurant.rating} per 5." 
                        alt="${restaurant.rating}/5">
                    </div>
                    <span class="rating-number">${restaurant.rating}</span>
                    <div class="btn-favorite-container"></div>
                </div>
                <div class="restaurant-detail__cuisines">
                    <h2>Kategori Masakan</h2>
                    <div class="restaurant-detail__cuisines-badges">
                        ${cuisines}
                    </div>
                </div>
            </div>
            <div class="restaurant-detail__tabs">
                <input type="radio" checked name="tabs" id="tab0">
                <input type="radio" name="tabs" id="tab1">
                <input type="radio" name="tabs" id="tab2">
                <ul class="restaurant-detail__tabs-labels" role="tablist">
                    <li class="restaurant-detail__tabs-label" id="tab-0">
                        <label for="tab0" id="label0"><h2>Deskripsi</h2></label>
                    </li>
                    <li class="restaurant-detail__tabs-label" id="tab-1">
                        <label for="tab1" id="label1"><h2>Menu</h2></label>
                    </li>
                    <li class="restaurant-detail__tabs-label" id="tab-2">
                        <label for="tab2" id="label2"><h2>Ulasan</h2></label>
                    </li>
                </ul>
                <div id="tab-content0" class="restaurant-detail__tabs__tab-content">
                    <p class="restaurant-detail__tabs__description">
                        ${restaurant.description}
                    </p>
                </div>
                <div id="tab-content1" class="restaurant-detail__tabs__tab-content">
                    <div class="restaurant-detail__tabs__menu">
                        <div class="restaurant-detail__tabs__menu-foods">
                            <h3>Foods</h3>
                            ${foodsMenuItemsLi}
                        </div>
                        <div class="restaurant-detail__tabs__menu-beverages">
                            <h3>Beverages</h3>
                            ${beveragesMenuItemsLi}
                        </div>
                    </div>
                </div>
                <div id="tab-content2" class="restaurant-detail__tabs__tab-content">
                    <div class="restaurant-detail__tabs__review">
                        ${reviews}
                    </div>
                </div>
            </div>
        </div>
    `};

const errorTemplate = async () => `
    <div class="error-template text-center">
        <h3>Terjadi Kesalahan</h3>
    </div>
`;

const showLoading = (loader) => {
	loader.classList.add("display");

	setTimeout(() => {
		loader.classList.remove("display");
	}, 2000);
}

// hiding loading 
const hideLoading = (loader) => {
	loader.classList.remove("display");
}

export {
	createRestaurantDetailTemplate, 
	createRestaurantItemTemplate, 
	createFavoriteButtonTemplate,
	createFavoritedButtonTemplate,
	createFailedSaveAlert,
	createSuccessSaveAlert,
	createFailedDeleteAlert,
	createSuccessDeleteAlert,
	errorTemplate,
	showLoading,
	hideLoading
};