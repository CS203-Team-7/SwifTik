import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Raffles = () => {
    const navigate = useNavigate();
    return (

        <div className="raffles">

            <Header />

            <div className="col2">
                <h2>My Raffles</h2>
                <p>Current Raffles</p>
                <p>Past Raffles</p>
            </div>
            <div className="col">
                <div className="card card1"></div>
                <div className="card card2"></div>
                <div className="card card3"></div>
                <div className="card card4"></div>
                {/* <div className="card card5"></div>
                <div className="card card6"></div> */}
            </div>

        </div>
    );
};

export default Raffles;