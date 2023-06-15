import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [className, setClassName] = useState('text__slider__right');

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setScrollPosition(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const currentScroll = window.pageYOffset;
    setClassName(scrollPosition> currentScroll ? 'text__slider__right' : 'text__slider__left');
  }, [scrollPosition]);

  return (
    <div className='home__container'>
      <section className="home__section__01">
        <div className={className}>
          <h1>discreetframing.</h1>
        </div>
      </section>
    </div>
  );
}

export default Home;
