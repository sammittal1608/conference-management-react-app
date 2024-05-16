import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

import conferenceImage from '../../imgs/Conference-login-img.avif';

function SignUp() {
    const handleForgetPasswordClick = () => {
        console.log("Forget password clicked");
    };

    const handleSignUpClick = () => {
        console.log("Sign Up clicked");
    };

    return (
        <div className="container">
             <div className="login-right">
                <img src={conferenceImage} alt="image de remplissage" width="100%" />
            </div>
            <div className="sign-up-left">
                <div className="login-header">
                    <h1>Welcome to Our Application</h1>
                    <p>Please Sign Up to use the platform</p>
                </div>
                <form action="" className="sign-up-form">
                    <div className="login-form-content">
                        <div className="form-item">
                            <label htmlFor="name">Enter Name</label>
                            <input type="name" id="name" />
                        </div>
                        <div className="form-item">
                            <label htmlFor="email">Enter Email</label>
                            <input type="email" id="email" />
                        </div>
                        <div className="form-item">
                            <label htmlFor="password">Enter password</label>
                            <input type="password" id="password" />
                        </div>
                        <button type="submit" >Sign Up</button>
                            <Link to="/" className='sign-in-title'> Already a user? Sign In</Link>
                    </div>
                </form>
            </div>
           
        </div>
    );
}

export default SignUp;
