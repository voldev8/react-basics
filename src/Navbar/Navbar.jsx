import React from 'react';

import './navbar.scss';

class Navbar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about',
     'contact'];
    
    const navLinks = pages.map((page, key) => {
      return (
        <a key={key} href={'/' + page}>
          {page}
        </a>
      )
    });
    return <nav>{navLinks}</nav>;
  }
}

export default Navbar;