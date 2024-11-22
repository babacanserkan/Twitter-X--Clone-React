import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/theme/layouts/main";
import NoutFound from "~/theme/pages/404";
import Explore from "~/theme/pages/explore";
import Home from "~/theme/pages/home";
import Notifications from "~/theme/pages/notifications";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "explore",
                element: <Explore />,
            },
            {
                path: "notifications",
                element: <Notifications />,
            },
            {
                path: "*",
                element: <NoutFound />,
            },
        ],
    },
]);

export default routes;
