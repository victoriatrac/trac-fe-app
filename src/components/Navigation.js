import React from 'react'
import { NavLink } from 'react-router-dom'

import '../css/navigation.css'

/* 

Creates the navigation component using NavLink. It uses a ternary conditional, checking isActive to see which tab matches the current view. The current tab is highlighted with a different style as a visual indicator.

*/

function Navigation() {
  return (

    <div id="nav-container">
      <nav id="nav">
        <div id="nav-profile-div">
          <p>VT</p>
        </div>
        <NavLink 
          to="/" 
          className={(navData) =>
          (navData.isActive ? 'current' : 'nav-link')}
        >
          <li>
            Home
          </li>
        </NavLink>
        <NavLink 
          to="/posts" 
          className={(navData) =>
          (navData.isActive ? 'current' : 'nav-link')}
        >
          <li>
            Posts
          </li>
        </NavLink>
      </nav>
    </div>
  )
}

export default Navigation