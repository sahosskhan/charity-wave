import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import MainDonate from "../Pages/Donate/MainDonate";

const Router =  createBrowserRouter([
    {

        path : "/",
        element : <MainLayouts/>,
        errorElement: <Error/>,
        children : [
            {
                path : "/",
                element: <Home/>,
            },
            {
                path : "/donate-some-love",
                element: <MainDonate/>,
            },
        ]

    }
])

export default Router;