import React from 'react'
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton'
import ForumIcon from '@mui/icons-material/Forum';

function header() {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize='large' className='header__icon' />
      </IconButton>

      <img src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo-1536x864.png"
        alt="Logo"
        className='header__logo'
      />
      <a>
        <IconButton>
          <ForumIcon fontSize='large' className='header__icon' />
        </IconButton>
      </a>

    </div>
  )
}

export default header 