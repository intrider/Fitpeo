import React from 'react'
import Upcomingschedule from './Upcomingschedule'
import Anatomysection from './Styles/Anatomy/Anatomysection'
import HealthStatus from './HealthStatus'
import Calendarview from './Calendarview'
import ActivityFeed from './ActivityFeed'
import "./Styles/Dashboardlayout.css"
function Dashboardlayout() {
  return (
    <>
    <div className='dashboard-layout'>
    <div className='left-panel'>
      <h2>Dashboard</h2>
      <Anatomysection/>
      <HealthStatus/>
      <ActivityFeed/>
    </div>
    <div className='right-panel'>
      <Calendarview/>
      {/* <Upcomingschedule/> */}
    </div>
    </div>
    </>
  )
}

export default Dashboardlayout