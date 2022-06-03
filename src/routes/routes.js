import { AuthPage } from "../pages/AuthPage";
import { MainPage } from "../pages/MainPage";
import { RegPage } from "../pages/RegPage";

export const publicRoutes = [
	{
		path: "/",
		component: <MainPage />,
	},

	{
		path: "/login",
		component: <AuthPage />,
	},

	{
		path: "/registration",
		component: <RegPage />,
	},
];
