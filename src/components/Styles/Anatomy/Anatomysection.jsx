import React from 'react'
import AnatomyStatus from './AnatomyStatus'
import "../../Styles/Anatomysection.css"
import humanBody from '../../../assets/humanBody.webp'
function Anatomysection() {
  return (
    <>
    <div className='anatomy-section'>
    <div className='image-wrapper'>
      <img src={humanBody} alt='HumanBody'/>
      {AnatomyStatus.map((item, index) => (
          <span
            key={index}
            className={`label ${item.position}`}
            style={{ backgroundColor: item.statusColor }}
          >
            {item.label}
          </span>
        ))}
    </div>
    </div>
    </>
  )
}

export default Anatomysection