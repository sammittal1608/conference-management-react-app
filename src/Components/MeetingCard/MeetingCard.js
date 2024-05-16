import React from 'react';
import './MeetingCard.css';
import alexPic from '../../imgs/alex-pic.jpg';

function MeetingCard() {
    return (
        <div className="container">
            <div className="header">
                <div className="user-profile">
                    <img src={alexPic} alt="people-pic" className="user-pic" />
                </div>
                <div className="meeting-description">
                    <p>Design Startup Pro</p>
                    <div className="time">
                        <i className="bi bi-clock"></i>
                        <span>10:30 AM </span> - <span>11:00 AM</span>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row content">
                <div className="info">
                    <div className="members">
                        <span>9 Members Going</span>
                    </div>
                    <div className="pending">
                        <span>2 Pending</span>
                    </div>
                </div>
                <div className="img-container">
                    <img src={alexPic} className="profile-pic" alt="people-pic" />
                    <span className="plus"> +4</span>
                </div>
            </div>
            <div className="button">
                <a href="#">View Details</a>
            </div>
        </div>
    );
}

export default MeetingCard;
