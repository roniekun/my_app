import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import './ToggleTheme.css';

const ToggleTheme = () => {

  const { toggleTheme, setTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    toggleTheme(setTheme);
    
  }

  return (
    <div>
      <button className='toggle__darkmode__btn' onClick={handleToggleTheme} />
      {toggleTheme && console.log('Dark mode enabled')}
    </div>
  );
};

export default ToggleTheme;
