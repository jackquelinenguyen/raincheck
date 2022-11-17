import React from 'react';
import './Logo.scss';
import Icon from './Icon.jsx';

const Logo = () => {
  return (
    <div>
      <div className="logo">
        <Icon />
        RainCheck
      </div>
      <div className="slogan">for when life slows down</div>
    </div>
  );
};

export default Logo;
