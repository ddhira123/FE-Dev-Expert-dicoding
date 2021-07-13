const assert = require('assert');

Feature('Save Restaurant to Favorite');

Before(({ I }) => {
	I.amOnPage('/#/favorite');
});

Scenario('showing no data in favorite', ({ I }) => {
	I.see('Tidak ada Restoran untuk ditampilkan.', '.no-data');
});

Scenario('liking one movie', async ({ I }) => {
	I.see('Tidak ada Restoran untuk ditampilkan.', '.no-data');
   
	I.amOnPage('/');

	I.seeElement('.restaurant-item a');

    
	const firstRestaurant = locate('.restaurant-item a').first();
	const firstRestaurantTitle = await I.grabTextFrom('.restaurant-item__name');
	I.click(firstRestaurant);
	
	I.seeElement('#btn-favorite');
	I.click('#btn-favorite');

	I.amOnPage('/#/favorite');
	I.seeElement('.restaurant-item');

    
	const favoriteRestaurantName = await I.grabTextFrom('.restaurant-item__name');
 
	assert.strictEqual(firstRestaurantTitle, favoriteRestaurantName);
});