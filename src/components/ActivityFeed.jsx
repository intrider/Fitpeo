import React from 'react'
import ActivityData from '../data/Activitydata'
import "./Styles/Activityfeed.css"
function ActivityFeed() {
  return (
    <>
    <div className='Activity-feed'>
        <h3 className='activity-title'>Activity</h3>
        <p className='activity-subtitle'>3 appointments on this week</p>

        <div className='Activity-chart'>
            {ActivityData.map((data, index) => (
          <div className="activity-bar-wrapper" key={index}>
            <div
              className="activity-bar"
              style={{ height: `${data.value * 10}px` }}
            ></div>
            <span className="activity-day">{data.day}</span>
          </div>
        ))}
        </div>
    </div>
    </>
  )
}

export default ActivityFeed