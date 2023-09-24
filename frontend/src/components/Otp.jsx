import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { verifyOTP } from '../services/User';

const OtpPage = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState('');
    const [email, setEmail] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here we will call the OTP API endpoint and then navigate the user to the login page.
        verifyOTP(email, otp)
            .then((res) => {
                navigate("/");
            })
    }
  
    return (
    <div className='auth-form-container'>
        <form className='register-form' onSubmit={handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Type your email address...' />
            <label htmlFor='otp'>OTP</label>
            <input value={otp} onChange={(e) => setOtp(e.target.value)} type='text' placeholder='Enter the OTP we sent to your mobile number...' />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default OtpPage;