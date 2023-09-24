import React from "react";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <h1>SwifTik</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/">Login</a></li>
                    <li><a href="/register">Register</a></li>
                </ul>
            </nav>
            <div className="search">
                <input type="text" placeholder="Search" />
            </div>
        </div> //add login bar ltr
    );
}

export default Header;

