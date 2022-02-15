import React from 'react'
import Image from 'next/image'


export const Header = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <a to="/" className="nav-brand">
          <Image 
            src="/Images/bcgov-h.png" 
            className="nav-logo" 
            alt="BC GOV Logo"
            width={136}
            height={53}
            />
            <h1 className="nav-header">CITZ License Management</h1>
        </a>
        <div className="nav-group">
          <ul className="nav-item-wrapper">
            <li className="nav-item">
              <a className="nav-link" to="/path1">Link 1</a>
            </li>
            <li className="nav-item">
              <acorn className="nav-link" to="/path2">Link 2</acorn>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="/path3">Link 3</a>
            </li>
          </ul>
        </div>
      </div>
  </nav>
  )
}
