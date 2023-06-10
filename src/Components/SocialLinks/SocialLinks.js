import React from 'react';
import './SocialLinks.css';

const SocialLinks = () => {
  const socialMediaLinks = [
    { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/your-account' },
    { name: 'Twitter', icon: 'twitter', url: 'https://www.twitter.com/your-account' },
    { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/your-account' },
    // Add more social media links as needed
  ];

  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='Social_links__container'>
          <ul>
      {socialMediaLinks.map((link) => (
        <li className='social__links' key={link.name}>
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
