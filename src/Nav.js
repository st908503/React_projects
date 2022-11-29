import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './Nav.css'


const Nav = () => {

  const [show,handleShow] = useState(false);

useEffect(() => {
  window.addEventListener("scroll", () =>{
    if(window.scrollY > 100){
      handleShow(true);
    } else handleShow(false);
  });
  return () =>{
    window.removeEventListener("scroll", () =>{

    });
  };
},[]);


  return (
    <div className={`nav ${show && "nav-black"}`}>

    <a href="">
    <img
    className='nav-logo'
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png?20190206123158"
     alt="Netflix Logo" 
     />
     </a>

     <div className="navlinks">
     <a href="">Home</a>
     <a href="">TV Shows</a>
     <a href="">Movies</a>
     <a href="">News & Popular</a>
     <a href="">My List</a>
     <a href="">Browse by Languages</a>

     </div>

     <a href="">
     <img 
     className='nav-avatar'
     src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" 
     alt="Avatar Logo" />
    </a>
    </div>
    
  )
}
export default Nav 