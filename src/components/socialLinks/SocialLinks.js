import React from 'react';
import './SocialLinks.css';

const SocialLinks = () => {
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
    <div className='social__links__container'>
      <div className='btn__container'> {socialMediaLinks.map((link) => (
        <button className='link__btn' key={link.name} onClick={() => handleLinkClick(link.url)}>
          {link.name}
        </button>
      ))}</div>
     
    </div>
  );
};

export default SocialLinks;
