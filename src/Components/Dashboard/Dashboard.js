import React from 'react';
import './Dashboard.css';
import MeetingCard from '../MeetingCard/MeetingCard';

const Dashboard = () => {
    // const userName = "John Doe";

    // const handleLogout = () => {
    // };

    return (

        <div className='container '>
            <div className='row'>
                <div className='col-8'>
                    <div className='row'>
                        <div class="input-group">
                            <div class="form-outline" data-mdb-input-init>
                                <input type="search" id="form1" class="form-control" />
                                <label class="form-label" for="form1">Search</label>
                            </div>
                            <button type="button" class="btn btn-primary seach-bar-button" data-mdb-ripple-init>
                            </button>
                        </div>
                    </div>
                    <div className='row schedule-container' >
                        <h3>Schedule Meeting</h3>
                        <div className='col-auto m-3'>
                            <div className='row meeting-card'>
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
                            <div className='row meeting-card'>
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
                            <div className='row meeting-card'>
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
                    <div className='row'>
                        <h2 className='today-meeting-title'>
                            Today - 6 Today
                        </h2>

                        <div className='meeting-card-container'>
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
                    <div className='row'>
                        <div className='user-logout'>

                        </div>
                        <div className='profile-detail'>

                        </div>
                    </div>
                    <div className='row'>
                        calender
                    </div>
                    <div className='row'>
                        reminders
                    </div>
                    <div className='row'>
                        <button type="button" class="btn btn-primary">

                            + Create meeting
                        </button>

                    </div>
                </div>
            </div>
        </div>

        // <div className='dashboard-container'>
        //     <div className='button-container'>
        //         <button className='new-meeting'></button>
        //         <button className='meeting-list'></button>
        //         <button className='join-meeting'></button>

        //     </div>
        //     <div className="box-container">

        //     </div>
        // </div>
    );
}

export default Dashboard;
