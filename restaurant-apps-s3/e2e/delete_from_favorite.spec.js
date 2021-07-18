Feature('Delete Restaurant from Favorite');

Before(({ I }) => {
	I.amOnPage('/');

	I.seeElement('.restaurant-item a');

	I.click(locate('.restaurant-item a').first());
	
	I.seeElement('#btn-favorite');
	I.click('#btn-favorite');

	I.amOnPage('/#/favorite');
});

Scenario('showing a restaurant in favorite', ({ I }) => {
	I.seeElement('.restaurant-item');
});

Scenario('deleting restaurant from favorite', ({ I }) => {
	I.seeElement('.restaurant-item');

	I.click(locate('.restaurant-item a').first());
	
	I.seeElement('#btn-favorite');
	I.click('#btn-favorite');
    
	I.amOnPage('/#/favorite');

	I.see('Tidak ada Restoran untuk ditampilkan.', '.no-data');
});