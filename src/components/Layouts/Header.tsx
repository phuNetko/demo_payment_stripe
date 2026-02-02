import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ItemsHeader = ({ path, label }: { path: string, label: string }) => {
    const pathName = useLocation().pathname;

    const isActive = pathName === path;
    return (
        // <li >
            <Link to={path} className={`${isActive ? "text-blue-500 font-bold bg-amber-100" : "text-gray-500"} px-6 py-4`}>{label}</Link>
        // </li>
    )
}
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative">
            <button className="px-4 py-3 flex lg:hidden md:hidden text-2xl cursor-pointer" onClick={() => setOpen(!open)}>☰</button>
            {/* {open && ( */}
                <ul onClick={() => setOpen(false)} className={`flex lg:flex-row md:flex-row flex-col gap-4  border-b border-gray-200 bg-white absolute top-full left-0 w-full ${open ? "flex" : "hidden lg:flex md:flex  transition-all duration-500"}`}>
                    <ItemsHeader path="/" label="Home" />
                    <ItemsHeader path="/detail" label="Detail" />
                    <ItemsHeader path="/payment" label="Payment" />
                </ul>
            {/* )} */}
        </div>
    );
};

export default Header;