import React from 'react';
import './SocialLinks.css';
import { ThemeContext } from '../../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';


const SocialLinks = ({fontColor, isSmallScreen, isDesktop, showNavbar}) => {
  const socialMediaLinks = [
    { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/ronieuxjpg' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/roniebenitez' },
    { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/ronieuxjpg' },
    { name: 'Github', icon: 'github', url: 'https://www.github.com/roniekun' },
    // Add more social media links as needed
  ];

  const getFontAwesomeIcon = (iconName) => {
    switch (iconName) {
      case 'facebook':
        return faFacebook;
      case 'linkedin':
        return faLinkedin;
      case 'instagram':
        return faInstagram;
      case 'github':
        return faGithub;
      // Add more cases for additional icons
      default:
        return null;
    }
  };
  

  return (
    <ThemeContext.Consumer>
  {({ theme }) => (
    <div className='social__links__container'>
      <div className='btn__container'id={`component-${theme}`} >  
      
      {socialMediaLinks.map((link) => (
    <a
    id={`component-${theme}`}
    className='link__btn'
    key={link.name}
    href={link.url}
    target="_blank"
    style={{ color: fontColor }}
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon size='xl' icon={getFontAwesomeIcon(link.icon)} />
    {/* {isSmallScreen && !showNavbar &&(link.name)} */}
  </a>
        ))}</div>
      </div>
        )}
        </ThemeContext.Consumer>
  );
};

export default SocialLinks;
