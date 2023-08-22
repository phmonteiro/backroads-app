import React from 'react'
import { footerLinks, footerIcons } from '../dataJS'

export const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {footerLinks.map(footerLink => {
          const { id, href, text } = footerLink
          return (
            <li key={id}>
              <a href={href} className={"footer-link"}>{text}</a>
            </li>)
        })}

      </ul>
      <ul className="footer-icons">
        {footerIcons.map(footerIcon => {
          const { id, href, icon } = footerIcon
          return (
            <li key={id}>
              <a href={href} target="_blank" className="footer-icon"><i className={icon}></i></a>
            </li>
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> {new Date().getFullYear()} all rights reserved
      </p>
    </footer>
  )
}
