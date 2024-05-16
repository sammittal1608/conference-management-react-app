import React from 'react';
import './Auth.css';
import conferenceImage from '../../imgs/Conference-login-img.avif';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate



function Auth() {
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
        const handleForgetPasswordClick = () => {
        console.log("Forget password clicked");
    };

    const handleSignUpClick = () => {
        console.log("Sign Up clicked");
    };
    const handleSignIn = () => {
        
        navigate('/dashboard'); // Use navigate instead of history.push
    };

    return (
        <div className="container">
             <div className="login-right">
                <img src={conferenceImage} alt="image de remplissage" width="100%" />
            </div>
            <div className="login-left">
                <div className="login-header">
                    <h1>Welcome to Our Application</h1>
                    <p>Please login to use the platform</p>
                </div>
                <form action="" className="login-form">
                    <div className="login-form-content">
                        <div className="form-item">
                            <label htmlFor="email">Enter Email</label>
                            <input type="email" id="email" />
                        </div>
                        <div className="form-item">
                            <label htmlFor="password">Enter password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className="form-item">
                            <div className="forget-password" onClick={handleForgetPasswordClick}>
                                Forget password?
                            </div>
                        </div>
                        <button type="submit" onClick={handleSignIn}>Sign In</button>
                        <Link to="/signup" className='sign-up-title'>Not a user? Sign Up</Link>
                    </div>
                    <div className="login-form-footer">
                        <a href="#">
                            <img src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png" width="33px" alt="logo instagram" /> Instagram Login
                        </a>
                        <a href="#">
                            <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" width="33px" alt="logo google" /> Google Login
                        </a>
                    </div>
                </form>
            </div>
           
        </div>
    );
}

export default Auth;