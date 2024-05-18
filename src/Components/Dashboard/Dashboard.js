import React from 'react';
import './Dashboard.css';
import MeetingCard from '../MeetingCard/MeetingCard';
import Calendar from '../Calendar/Calendar';
import Reminder from '../Reminder/Reminder';
import alexImage from '../../imgs/alex-pic.jpg';

const reminders = [
    {
        icon: <i class="bi bi-calendar-event"></i>,
        text: 'Today is your meeting with PM.',
        role: 'Project Manager',
        roleClass: 'project-manager',
        time: '10:20 AM',
        type: 'calendar',
    },
    {
        icon: <i class="bi bi-brush"></i>,
        text: 'You need to add 4 artwork in vector.',
        role: 'Design Lead',
        roleClass: 'design-lead',
        time: '12:30 AM',
        type: 'artwork',
    },
    {
        icon: <i class="bi bi-x-circle"></i>,
        text: 'You have closed the logo design is final.',
        role: 'Team Leader',
        roleClass: 'team-leader',
        time: '12:30 AM',
        type: 'error',
    },
    {
        icon: <i class="bi bi-check-circle"></i>,
        text: 'Successfully completion of project.',
        role: 'Design & Team Lead',
        roleClass: 'design-team-lead',
        time: '12:30 AM',
        type: 'complete',
    },
];

const Dashboard = () => {
    return (
        <div className='dashboard-container '>
            <div className='row'>
                <div className='col-8'>
                    <div className='row'>
                        <div class="input-group">
                            <div class="form-outline" data-mdb-input-init>
                                <div className='search-bar-wrapper'>
                                    <div>
                                        <button type="button" class="btn btn-search">
                                            <i class="bi bi-search"></i>
                                        </button>
                                    </div>
                                    <div>
                                        <input type="search" id="form1" className='search-box' placeholder='Search' />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row schedule-container' >
                        <div>
                            <h3>Schedule Meeting</h3>
                        </div>
                        <div className='meeting-wrapper'>
                            <div className='col-auto m-3'>
                                <div className='row meeting-card-1'>
                                    <div className='col people-icon'>
                                        <i className="bi bi-people-fill" style={{ color: 'white', fontSize: '1.4rem' }}></i>
                                    </div>
                                    <div className='col-auto'>
                                        <div>Scheduling meeting</div>
                                        <div>
                                            <span>36</span>
                                            <span>This month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-auto m-3'>
                                <div className='row meeting-card-2'>
                                    <div className='col reschedule-icon'>
                                        <i class="bi bi-calendar-event" style={{ color: 'white', fontSize: '1.4rem' }}></i>
                                    </div>
                                    <div className='col-auto'>
                                        <div>Scheduling meeting</div>
                                        <div>
                                            <span>36</span>
                                            <span>This month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-auto m-3'>
                                <div className='row meeting-card-3'>
                                    <div className='col cancelled-schedule-icon'>
                                        <i class="bi bi-calendar2-x" style={{ color: 'white', fontSize: '1.4rem' }}></i>
                                    </div>
                                    <div className='col-auto'>
                                        <div>Scheduling meeting</div>
                                        <div>
                                            <span>36</span>
                                            <span>This month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row '>
                        <h3 className='today-meeting-title'>
                            Today - 6 Today
                        </h3>
                        <div className='meeting-cards-wrapper'>
                            <MeetingCard />
                            <MeetingCard />
                            <MeetingCard />
                            <MeetingCard />
                            <MeetingCard />
                            <MeetingCard />
                        </div>
                    </div>
                </div>
                <div className='col-auto'>
                    <div className="row profile-container">
                        <div className="profile-section">
                            <img src={alexImage} alt="Alex" className="profile-image" />
                            <span className="profile-name">Essie Howell</span>
                        </div>
                        <div className="log-out-icon">
                            <i className="bi bi-box-arrow-right"></i>
                        </div>

                    </div>
                    <div className='row calendar-wrapper'>
                        <Calendar />
                    </div>
                    <div className='row'>
                        <Reminder reminders={reminders} />
                    </div>
                    <div className='row create-meeting-btn'>
                        <button type="button" class="btn btn-primary">
                            <i class="bi bi-plus"></i>
                            Create meeting
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;