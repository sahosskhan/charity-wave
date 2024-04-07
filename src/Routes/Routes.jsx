import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import MainDonate from "../Pages/Donate/MainDonate";
import DonateDetails from "../Pages/Donate/DonateDetails";

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
                loader : ()=> fetch('/donate.json')
            },
            {
                path : "/donate-details/:id",
                element : <DonateDetails/>,
                loader:()=>fetch('/donate.json')
            }
        ]

    }
])

export default Router;