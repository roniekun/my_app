import React from 'react';
import './SocialLinks.css';

const SocialLinks = () => {
  const socialMediaLinks = [
    { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/ronieuxjpg' },
    { name: 'Twitter', icon: 'twitter', url: 'https://www.twitter.com/' },
    { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/ronieuxjpg' },
    // Add more social media links as needed
  ];

  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='Social_links__container'>
          <ul className='social__links__ul'>
      {socialMediaLinks.map((link) => (
        <li className='social__links' key={link.name} style={{ color: 'white' }}>
          <button className='btn' onClick={() => handleLinkClick(link.url)}>
            <i className={`fa fa-${link.icon}`} />
            {link.name}
          </button>
        </li>
      ))}
    </ul>
    </div>

  );
};

export default SocialLinks;
