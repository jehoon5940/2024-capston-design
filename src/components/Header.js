import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>{process.env.REACT_APP_NAME}</h1>
    </header>
  );
}

export default Header;
