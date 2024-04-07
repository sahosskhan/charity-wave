import Navbar from "../Shared/Navbar";
import { Outlet} from "react-router-dom";

const MainLayouts = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;