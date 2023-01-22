import React from 'react'
import "./Header.css";
import TeslaLogo from "../images/teslaLogoSmall.svg"

const Header = () => {

  //const t_image = 'https://brandlogos.net/wp-content/uploads/2015/09/tesla-logo-vector-download.jpg'
  return (
    <div className='header'>
    <div className="header_logo">
        <img src={TeslaLogo} alt="Tesla Logo" />
    </div>
    <div className="header_center">
        <p>Model S</p>
        <p>Model 3</p>
        <p>Model X</p>
        <p>Model Y</p>
        <p>Solar Roof</p>
        <p>Solar Panels</p>
    </div>
    <div className="header_right">
        <p>Shop</p>
        <p>Account</p>
        <p>Menu</p>
    </div>
    </div>
  )
}

export default Header