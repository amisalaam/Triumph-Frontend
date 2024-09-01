import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { ImProfile } from 'react-icons/im';

const SideBar = () => {
    const { pathname } = useLocation();
    
    const menuItems = [
        {
            label: "All Tickets",
            path: "/",
            icon: ImProfile
        },
        {
            label: "My Tickets",
            path: "/mytickets",
            icon: ImProfile
        }
    ];

    const isActive = (path) => pathname === path;

    return (
        <nav className="fixed top-20 left-0 z-40 md:w-[18rem] w-[17rem] h-screen bg-CustomerBlue border-r border-gray-200 rounded-xl">
            <div className="h-full overflow-y-auto bg-blue-900 rounded-xl">
                <ul className="space-y-3 font-medium border-y py-4">
                    {menuItems.map(({ label, path, icon: Icon }, index) => (
                        <li key={index} className={`group p-3 rounded-l-full ${isActive(path) ? 'bg-white text-black' : 'text-white hover:bg-gray-100'}`}>
                            <Link to={path} className="flex items-center">
                                <Icon size={30} className={`${isActive(path) ? 'text-black' : 'group-hover:text-black'}`} />
                                <span className={`ms-3 text-lg ${isActive(path) ? 'text-black' : 'group-hover:text-black'}`}>
                                    {label}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default SideBar;
