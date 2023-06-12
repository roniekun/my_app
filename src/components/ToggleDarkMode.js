import React, { useState } from 'react';
import './ToggleDarkMode.css'

function ToggleDarkMode() {
    const [isNightMode, setIsNightMode] = useState(false);
    const handleToggleDarkMode = () => {
        setIsNightMode(!isNightMode);
      };
  return (
    <div>
      <button className='toggle__darkmode__btn'
        onChange={handleToggleDarkMode}
      />
   </div>
  )
}

export default ToggleDarkMode