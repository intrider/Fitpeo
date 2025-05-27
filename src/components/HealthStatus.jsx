import React from 'react'
import healthCards from '../data/Healthcards'
import "./Styles/Healthstatus.css"
function HealthStatus() {
  return (
    <>
    <div className="health-status-cards">
      {healthCards.map((card, index) => (
        <div className="health-card" key={index}>
          <div className="health-card-icon">{card.icon}</div>
          <div className="health-card-title">{card.title}</div>
          <div className="health-card-date">Date: {card.date}</div>
          <div className="health-card-bar">
            <div
              className="health-status-indicator"
              style={{ backgroundColor: card.statusColor }}
            ></div>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default HealthStatus