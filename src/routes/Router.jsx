import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../layout/home/Home";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/"
            }
        ]
    },
]);

export default router;