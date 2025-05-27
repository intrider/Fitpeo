import React from 'react';
import Navigationlinks from '../data/Navigationlinks';
import './Styles/Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar-container'>
      <h3 className='logo'>
        <span>Health</span>care.
      </h3>

      <div className='section-label'>General</div>
      <div className='nav-links'>
        {Navigationlinks.slice(0, 5).map((link, index) => (
          <div key={index} className='nav-item'>
            <i className={link.icon}></i>
            <span>{link.label}</span>
          </div>
        ))}
      </div>

      <div className='section-label'>Tools</div>
      <div className='nav-links'>
        {Navigationlinks.slice(5, 7).map((link, index) => (
          <div key={index} className='nav-item'>
            <i className={link.icon}></i>
            <span>{link.label}</span>
          </div>
        ))}
      </div>

      <div className='nav-links'>
        <div className='nav-item'>
          <i className={Navigationlinks[7].icon}></i>
          <span>{Navigationlinks[7].label}</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
