import React from 'react';
import logo from '../../img/logo-uner.png';

function Logo() {
  return (
    <img src={logo} alt="Logo Uner" onClick={() => {
      window.location.href = '/';
    }} />
  );
}

export default Logo;
