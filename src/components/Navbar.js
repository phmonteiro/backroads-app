import React from 'react'
import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from '../dataJS'

export const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <ul className="nav-links" id="nav-links">
            {pageLinks.map((pageLink) => {
              return (
                <li key={pageLink.id} className='nav-link'>
                  <a href={pageLink.href}>
                    {pageLink.text}
                  </a>
                </li>
              )
            })}
          </ul>
          <ul className="nav-icons">
            {socialLinks.map(link => {
              return (
                <li key={link.id}>
                  <a href={link.href} target="_blank" className='nav-icon'>
                    <i className={link.className}></i>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  )
}
