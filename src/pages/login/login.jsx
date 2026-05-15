import React from 'react'
import './Login.css'
import assets from '../../assets/assets'
const Login = () => {
    return (
        <div className='login'>
            <img src={assets.logo_big} alt="" className="logo" />
            <form className="login-form">
                <h2>
                    Sign Up
                </h2>
                <input type="text" placeHolder='username' className="form-input" required />
                <input type="email" placeHolder='Email address' className="form-input" required />
                <input type="password" placeHolder='password' className="form-input" required />
                <button type='summit'>Sign Up</button>
                <div className="login-term">
                    <imput type="checkbox" />
                    <p>Agree to the terms of use & privacy policy.</p>
                </div>
                <div className="login-forget">
                    <p  className="login-toggle">Already have an account <span>click here</span></p>
                </div>
            </form>
        </div>
    )
}

export default Login;