import Home from "../views/pages/home";
import Detail from "../views/pages/detail";

const routes = {
	'/': Home, // default page
	// '/review': Review,
	'/detail/:id': Detail,
};

export default routes;
