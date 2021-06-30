import DrawerInitiator from "../utils/drawer-initiator";
import UrlParser from "../routes/url-parser";
import routes from "../routes/routes";
import { errorTemplate } from "./templates/template-builder";

class App {
	constructor({ button, drawer, content }) {
		this._button = button;
		this._drawer = drawer;
		this._content = content;
		this._initialAppShell();
	}

	_initialAppShell() {
		DrawerInitiator.init({
			button: this._button,
			drawer: this._drawer,
			content: this._content,
		});
	}

	async renderPage() {
		const url = UrlParser.parseActiveUrlWithCombiner();
		const page = routes[url];
		try {
			this._content.innerHTML = await page.render();
			await page.afterRender();
		} catch (error) {
			this._content.innerHTML = await errorTemplate();
			console.error(error);
		}
	}
}

export default App;
