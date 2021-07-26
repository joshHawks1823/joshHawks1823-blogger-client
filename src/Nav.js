import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <nav class="navbar header-nav navbar-expand-lg fixed-top p-3">
      <div class="container-fluid">
      <Link class="navbar-brand" to="/">Blogger</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
    <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/create">Create Post</Link>
        </li>
    </ul>
  
    </div>
      </div>
      </nav>
    </header>
   
  )
}

export default Nav
