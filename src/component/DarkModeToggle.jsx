import React, { useState } from 'react';
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <button
            onClick={toggleDarkMode}
            className={`px-4 py-3 flex items-center justify-center rounded focus:outline-none focus:ring-2 ${
                isDarkMode
                    ? "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-200"
                    : "bg-white text-gray-800 dark:bg-neutral-800 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-700 focus:ring-gray-300 dark:focus:ring-neutral-400"
            }`}
        >
            {isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
        </button>
    );
};

export default DarkModeToggle;
