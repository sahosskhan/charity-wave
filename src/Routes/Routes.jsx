import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import MainDonate from "../Pages/Donate/MainDonate";
import DonateDetails from "../Pages/Donate/DonateDetails";
import MyDonationMain from "../Pages/Donation/MyDonationMain";
import Statistics from "../Pages/Statistics/Statistics";

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
            },
            {
                path : "/my-donation",
                element : <MyDonationMain/>,
            },
            
            {
                path : "/statistics",
                element : <Statistics/>,
            }
        ]

    }
])

export default Router;