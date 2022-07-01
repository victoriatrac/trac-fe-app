import React from 'react'
import { NavLink } from 'react-router-dom'

import '../css/navigation.css'

function Navigation() {
  return (

    <div id="nav-container">
      <nav id="nav">
        <div id="nav-profile-div">
          <p>VT</p>
        </div>
        <NavLink to="/" className={(navData) =>
          (navData.isActive ? 'current' : 'nav-link')}>
          <li>Home</li>
        </NavLink>
        <NavLink to="/posts" className={(navData) =>
          (navData.isActive ? 'current' : 'nav-link')}>
          <li>Posts</li>
        </NavLink>
      </nav>
    </div>

  )
}

export default Navigation