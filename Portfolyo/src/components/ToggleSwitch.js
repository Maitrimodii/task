import React from 'react';

const ToggleSwitch = ({ darkMode, setDarkMode }) => {
    // Function to toggle dark mode
    const toggleDarkMode = () => {
        // Toggle the dark mode state
        setDarkMode(!darkMode);
        // Toggle dark mode class on the body
        document.body.classList.toggle('dark', darkMode); 
    };

    return (
        <label className="switch inline-block w-14 h-7 md:w-10 md:h-5 relative">
            {/* Checkbox input */}
            <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
                className="hidden"
            />
            {/* Switch background */}
            <span className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 transition-transform duration-300 rounded-full border-1 shadow-md ${darkMode ? 'shadow-gray-500 border-gray-500 ':' shadow-purple border-purple'}`}
                style={{
                    // Set background image based on dark mode state
                    backgroundImage: darkMode
                        ? 'url(/light_mode.png)'
                        : 'url(/dark_mode.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center', 
                }}
            >
                {/* Switch thumb */}
                <span
                    className={`absolute h-7 w-7 md:h-5 md:w-5 rounded-full transform transition-transform duration-300 ${
                        darkMode ? 'translate-x-0 bg-yellow-400' : 'translate-x-full  bg-purple'
                    }`}
                ></span>
            </span>
        </label>
    );
};

export default ToggleSwitch;
