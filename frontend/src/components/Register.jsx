import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
    return (
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                <label htmlFor="passwordConfirmation">Password Confirmation </label>
                <input value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} type="password" placeholder="Password Confirmation" />
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} type="text" placeholder="Mobile Number" />
                <button type="submit">Register</button>
            </form>
            <button className="link-button" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}