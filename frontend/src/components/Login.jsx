import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize navigate function

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        //e.preventDefault();
        handleLogin();
        // console.log(email);
    }

    const handleLogin = () => {
        const validEmail = "abc@def.com";
        const validPassword = "Password123";

        if (email === validEmail && password === validPassword) {
            alert('Login successful');
            localStorage.setItem("authenticated", true);
            navigate("/Dashboard");
        } else {
            alert('Not Successful. LOL');
        }
    }

    return (
        <div className="auth-form-container">
            <h1>SwifTik</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={handleEmailChange} type="email" placeholder="Email" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={handlePasswordChange} type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
            <button className="link-button" onClick={() => props.onFormSwitch('register')}>Dont have an account? Register here.</button>
        </div>
    )
}