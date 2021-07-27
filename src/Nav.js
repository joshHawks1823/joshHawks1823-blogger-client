import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <nav className='navbar header-nav navbar-expand-lg fixed-top p-3'>
        <div className='container-fluid d-flex align-items-center'>
          <Link className='navbar-brand' to='/'>
            Blogger
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link' aria-current='page' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/create'>
                  Create Post
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
