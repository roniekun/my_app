
import React, { useContext } from 'react';
import { ThemeContext } from "../../context/ThemeContext";
import './ToggleTheme.css';

const ToggleTheme = ({ isSmallScreen }) => {
const { toggleTheme, theme} = useContext(ThemeContext);

const handleToggleTheme = () => {
toggleTheme();
};

return (
<div className='toggle__component'>
{isSmallScreen && <h3>Toggle theme</h3>}
<div className='settheme__container' onClick={handleToggleTheme}>
<div className={`settheme__btn ${theme === 'dark' ? 'theme__on' : ''}`} />

</div>
</div>
);
};

export default ToggleTheme;