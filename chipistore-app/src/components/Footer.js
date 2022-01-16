import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      {year} © CHIPI Store is distributed worldwide
    </div>
  );
}

export default Footer;