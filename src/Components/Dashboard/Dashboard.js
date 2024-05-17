import React from 'react';
import './Dashboard.css';
import MeetingCard from '../MeetingCard/MeetingCard';

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
                    <div className='row'>
                        <div className='user-logout'>

                        </div>
                        <div className='profile-detail'>

                        </div>
                    </div>
                    <div className='row calender-wrapper'>
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