import React from 'react';
import './Reminder.css';

const Reminder = ({ reminders }) => {
    return (
        <div className="reminder-container">
            <div className="reminder-header">
                <h2>Reminders</h2>
                <i class="bi bi-bell"></i>
            </div>
            <div className="reminder-list">
                {reminders.map((reminder, index) => (
                    <div key={index} className="reminder-item">
                        <div className={`icon ${reminder.type}`}>
                            <i>{reminder.icon}</i>
                        </div>
                        <div className="reminder-details">
                            <div className="reminder-text">{reminder.text}</div>
                            <div className={`reminder-role ${reminder.roleClass}`}>{reminder.role}</div>
                        </div>
                        <div className="reminder-time">{reminder.time}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reminder;
