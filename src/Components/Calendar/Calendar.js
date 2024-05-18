import React, { useState, useEffect } from 'react';
import './Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const now = new Date();
    setToday(new Date(now.getFullYear(), now.getMonth(), now.getDate()));
  }, []);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const renderHeader = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"];
    return (
        
      <div className="calendar-header">
        <h3>Calendar</h3>
        <button onClick={handlePrevMonth}>&lt;</button>
        <span>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
    );
  };

  const renderDays = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return (
      <div className="calendar-days">
        {days.map((day, index) => (
          <div key={index} className="calendar-day">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderDates = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();

    const dates = [];
    // Previous month's dates
    for (let i = firstDay - 2; i >= 0; i--) {
      dates.push(
        <div key={`prev-${i}`} className="calendar-date disabled">
          {prevMonthDays - i}
        </div>
      );
    }

    // Current month's dates
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isToday = date.getTime() === today.getTime();
      dates.push(
        <div
          key={day}
          className={`calendar-date ${isToday ? 'selected' : ''}`}
        >
          {day}
        </div>
      );
    }

    // Next month's dates
    const totalCells = dates.length;
    const nextMonthDays = 7 - (totalCells % 7);
    for (let i = 1; i <= nextMonthDays && nextMonthDays < 7; i++) {
      dates.push(
        <div key={`next-${i}`} className="calendar-date disabled">
          {i}
        </div>
      );
    }

    return <div className="calendar-dates">{dates}</div>;
  };

  return (
    <div className="calendar">
      {renderHeader()}
      {renderDays()}
      {renderDates()}
    </div>
  );
};

export default Calendar;
