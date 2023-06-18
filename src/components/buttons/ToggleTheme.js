import { ThemeContext } from "../../context/ThemeContext";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import './ToggleTheme.css';
import React, { useContext } from 'react';

const ToggleTheme = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <div id={`component-${theme}`} onClick={handleToggleTheme}>
      {theme === 'light' ? <MdOutlineDarkMode className='toggle__darkmode__btn' /> : <MdOutlineWbSunny className='toggle__darkmode__btn' />}
    </div>
  );
};

export default ToggleTheme;
