import React, { useState } from "react";
import Header from "../components/Header";
import CurrentRaffles from "../components/CurrentRaffles";
import PastRaffles from "../components/PastRaffles";

const Raffles = () => {
    const [currentraffles] = useState([
        {
            Zone: '1',
            EventDate: '03/03/2024',
            RaffleNumber: '2',
            Type: 'raffleC',
            Status: 'Ongoing',
            Picture: 'https://upload.wikimedia.org/wikipedia/en/3/33/The_Eras_Tour_poster.jpg'
        },
        {
            Zone: '2',
            EventDate: '03/06/2025',
            RaffleNumber: '6',
            Type: 'raffleC',
            Status: 'Ongoing',
            Picture: 'https://upload.wikimedia.org/wikipedia/en/3/33/The_Eras_Tour_poster.jpg'
        },
    ]);//temporary hardcoded data

    const [pastraffles] = useState([
        {
            Zone: '1',
            EventDate: '03/03/2024',
            RaffleNumber: '2',
            Type: 'raffleP',
            Status: 'Ongoing',
            Picture: 'https://m.media-amazon.com/images/I/61zVGn1okXL._AC_UF894,1000_QL80_.jpg'
        },
        {
            Zone: '2',
            EventDate: '03/06/2025',
            RaffleNumber: '6',
            Type: 'raffleP',
            Status: 'Ongoing',
            Picture: 'https://m.media-amazon.com/images/I/61zVGn1okXL._AC_UF894,1000_QL80_.jpg'
        },
    ]);//temporary hardcoded data

    return (

        <div className="raffles">
            <Header />
            <div className="row heading">
                <h3>Current Raffles</h3>
            </div>
            <div className="row">
                <CurrentRaffles currentraffles={currentraffles} />
            </div>
            <div className="row heading">
                <h3>Past Raffles</h3>
            </div>
            <div className="row">
                <CurrentRaffles currentraffles={currentraffles} />
            </div>
        
        </div>
    );
};

export default Raffles;