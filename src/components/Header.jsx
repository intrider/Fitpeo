import React from 'react'
import{Bell} from 'lucide-react'
import "./Styles/Header.css"
function Header() {
  return (
    <>
    <div className='Search-container'>
    <input  type='text' placeholder='Search' disabled/>
    <span className='search-icon'><i className="fa-solid fa-magnifying-glass fa-2xs"></i></span>
    </div>
    <div className='header-right'>
    <Bell className='icon-bell-violet'/>
    </div>
    </>
  )
}

export default Header