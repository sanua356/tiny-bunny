import {
	createHashRouter,
	RouterProvider
} from "react-router-dom";

import { GamePage } from "pages/game";
import { HomePage } from "pages/home";

const router = createHashRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/game",
		element: <GamePage />,
	},
]);


export const AppRouter = () => {
	return <RouterProvider router={router} />
}
