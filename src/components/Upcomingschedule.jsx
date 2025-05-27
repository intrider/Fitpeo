import React from 'react';
import "./Styles/Upcomingschedule.css";
const schedule = [
  {
    day: 'On Thursday',
    items: [
      { title: 'Health checkup complete', time: '11:00 AM', icon: '🩺' },
      { title: 'Ophthalmologist', time: '14:00 PM', icon: '👁️' },
    ]
  },
  {
    day: 'On Saturday',
    items: [
      { title: 'Cardiologist', time: '12:00 AM', icon: '❤️' },
      { title: 'Neurologist', time: '16:00 PM', icon: '🧠' },
    ]
  }
];

const UpcomingSchedule = () => {
  return (
    <div className="schedule-container">
      <h4 className="schedule-title">The Upcoming Schedule</h4>
      {schedule.map((block, idx) => (
        <div key={idx}>
          <h5 className="schedule-day">{block.day}</h5>
          <div className="schedule-cards">
            {block.items.map((item, i) => (
              <div key={i} className="appointment-card">
                <span>{item.title}</span>
                <p>{item.time}</p>
                <span className="icon">{item.icon}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
