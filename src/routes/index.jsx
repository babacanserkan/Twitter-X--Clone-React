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
                path: "messages",
                element: "Messages",
            },
            {
                path: "grok",
                element: "Grok",
            },
            {
                path: "bookmarks",
                element: "Bookmarks",
            },
            {
                path: "jobs",
                element: "Jobs",
            },
            {
                path: "communities",
                element: "Communities",
            },
            {
                path: "premium",
                element: "Premium",
            },
            {
                path: "organizations",
                element: "Verified Orgs",
            },
            {
                path: "profile",
                element: "Profile",
            },
            {
                path: "more",
                element: "",
            },
        ],
    },
    {
        path: "*",
        element: <NoutFound />,
    },
]);

export default routes;
