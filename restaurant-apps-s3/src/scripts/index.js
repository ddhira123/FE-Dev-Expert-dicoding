import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import './views/pages/home';

import App from './views/app';
import swRegister from './utils/sw-register';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
	button: document.querySelector('#hamburger'),
	drawer: document.querySelector('.sidenav'),
	content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
	app.renderPage();
});

window.addEventListener('load', () => {
	app.renderPage();
	swRegister();
});

