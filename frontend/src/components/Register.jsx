import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { register } from "../services/User";

export const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== passwordConfirmation){
            alert("Passwords do not match");
            return;
        }
        // Here we will call the register API endpoint and then store the token in local storage.
        register(email, password, dateOfBirth, phoneNumber)
            .then((res) => {
                // After successful registration, we will navigate the user to the OTP page.
                navigate("/otp");
            })
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
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} type="date" placeholder="XXXX/XX/XX" />
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" placeholder="Mobile Number" />
                <button type="submit">Register</button>
            </form>
            <button className="link-button" onClick={() => navigate("/")}>Already have an account? Login here.</button>
        </div>
    )
}