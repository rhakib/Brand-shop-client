import React from "react";
// import { ReactComponent as Sun } from "./Sun.svg";
// import { ReactComponent as Moon } from "./Moon.svg";
import { BsFillSunFill as Sun, BsFillMoonFill as Moon } from 'react-icons/bs'

import "./DarkMode.css";

const DarkMode = () => {

    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
    }

    const toggleTheme = e => {
        if (e.target.checked) setDarkMode();
        else setLightMode()
    }


    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                
                    <Sun className="sun"/>
                    <Moon className="moon" />
              
            </label>
        </div>
    );
};

export default DarkMode;
