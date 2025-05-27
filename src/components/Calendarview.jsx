import React from 'react';
import './Styles/CalendarView.css';
import UpcomingSchedule from './Upcomingschedule';

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
const dates = ['25', '26', '27', '28', '29', '30', '31'];
const times = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];

const Calendarview = () => {
  return (
    <div className="calendar-container">
    {/* Avatar and Add Icon Header */}
      <div className="calendar-topbar">
        <div className="calendar-avatar">
          <span>🧒</span>
        </div>
        <button className="calendar-add-btn">
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <div className="calendar-header">
        <h4>October 2021</h4>
        <div className="calendar-arrows">
        <span className="arrow left">
          <i className="fa-solid fa-arrow-left"></i>
        </span>
        <span className="arrow right">
          <i class="fa-solid fa-arrow-right"></i>
        </span>
      </div>
      </div>

      <div className="calendar-grid">
        {days.map((day, index) => (
          <div key={index} className="calendar-day">
            <span className="day-label">{day}</span>
            <span className="date-label">{dates[index]}</span>
            <div className="time-slots">
              {times.map((time, idx) => (
                <div key={idx} className={`time-box ${day === 'Tues' && time === '09:00' ? 'selected' : ''}
                                                    ${day === 'Thurs' && time === '11:00' ? 'selected' : ''}`}>
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="appointments">
        <div className="appointment dentist">
          <strong>Dentist 🦷</strong>
          <p>09:00 - 11:00</p>
          <span>Dr. Cameron Williamson</span>
        </div>
        <div className="appointment physio">
          <strong>Physiotherapy Appointment</strong>
          <p>11:00 - 12:00</p>
          <span>Dr. Kevin Djones</span>
        </div>
      </div>
      <UpcomingSchedule/>
    </div>
  );
};

export default Calendarview;
