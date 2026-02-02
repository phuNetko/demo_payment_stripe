import Header from "./Header";
import { Outlet } from "react-router-dom";
const DefaultLayout = () => {
    return (
        <div>
            <Header />
            <div className="p-5 lg:pt-20 md:pt-20 pt-5  bg-[#F3F4F7] min-h-content">
                <Outlet />
            </div>
        </div>
    )
};

export default DefaultLayout;