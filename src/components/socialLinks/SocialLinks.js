import React from 'react';
import './SocialLinks.css';
import { ThemeContext } from '../../context/ThemeContext';

const SocialLinks = ({fontColor}) => {
  const socialMediaLinks = [
    { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/ronieuxjpg' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/roniebenitez' },
    { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/ronieuxjpg' },
    { name: 'Github', icon: 'github', url: 'https://www.github.com/roniekun' },
    // Add more social media links as needed
  ];

  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <ThemeContext.Consumer>
  {({ theme }) => (
    <div className='social__links__container'>
      <div className='btn__container'id={`component-${theme}`} >  
      
      {socialMediaLinks.map((link) => (
        <button  id={`component-${theme}`} 
        className='link__btn' key={link.name} 
        // style={{ color: fontColor }}
         onClick={() => handleLinkClick(link.url)}>
          {link.name}
        </button>
        ))}</div>
      </div>
        )}
        </ThemeContext.Consumer>
  );
};

export default SocialLinks;
